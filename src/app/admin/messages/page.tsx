'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { ContactMessage } from '@/types/contact';
import { format } from 'date-fns';
import { Trash2, Eye, X } from 'lucide-react';

export default function AdminMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) {
        setMessages(data);
      }
      setLoading(false);
    };

    fetchMessages();
  }, [supabase]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    const { error } = await supabase.from('contact_messages').delete().eq('id', id);
    if (!error) {
      setMessages(messages.filter((msg) => msg.id !== id));
      if (selectedMessage?.id === id) setSelectedMessage(null);
    } else {
      alert('Error deleting message: ' + error.message);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
        <p className="text-gray-500">View and manage inquiries from your contact form.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Business</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Type</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  Loading messages...
                </td>
              </tr>
            ) : messages.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No messages found.
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {msg.first_name} {msg.last_name}
                    </div>
                    <div className="text-xs text-gray-500">{msg.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {msg.business_name}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 uppercase">
                      {msg.help_type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {format(new Date(msg.created_at), 'MMM dd, HH:mm')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setSelectedMessage(msg)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-bold text-gray-900">Message Details</h2>
              <button
                onClick={() => setSelectedMessage(null)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-auto space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">From</p>
                  <p className="mt-1 font-medium text-gray-900">{selectedMessage.first_name} {selectedMessage.last_name}</p>
                  <p className="text-gray-600">{selectedMessage.email}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Business</p>
                  <p className="mt-1 font-medium text-gray-900">{selectedMessage.business_name}</p>
                  {selectedMessage.phone_number && (
                    <p className="text-gray-600">{selectedMessage.phone_number}</p>
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Inquiry Type</p>
                  <p className="mt-1 font-medium text-gray-900 uppercase">{selectedMessage.help_type}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Existing Customer</p>
                  <p className="mt-1 font-medium text-gray-900">{selectedMessage.is_existing_customer ? 'Yes' : 'No'}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Needs & Details</p>
                <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-xl whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {selectedMessage.needs}
                </div>
              </div>
              <div className="pt-4 text-xs text-gray-400">
                Received on {format(new Date(selectedMessage.created_at), 'PPPP p')}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
