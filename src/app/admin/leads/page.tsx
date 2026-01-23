'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { 
  Users, 
  Phone, 
  Mail, 
  Building2, 
  Briefcase, 
  Calendar,
  CheckCircle,
  Clock,
  RefreshCw,
  XCircle,
  ChevronDown,
  Search,
  Filter
} from 'lucide-react';

type LeadStatus = 'pending' | 'completed' | 'retry' | 'not_interested';

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  business_name: string;
  industry: string;
  business_page?: string;
  employees: string;
  services: string[];
  status: LeadStatus;
  created_at: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const supabase = createClient();

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching leads:', error);
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    const loadLeads = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching leads:', error);
      } else {
        setLeads(data || []);
      }
      setLoading(false);
    };
    
    loadLeads();
  }, [supabase]);

  const updateLeadStatus = async (leadId: string, status: LeadStatus) => {
    const { error } = await supabase
      .from('leads')
      .update({ status })
      .eq('id', leadId);

    if (error) {
      console.error('Error updating lead status:', error);
    } else {
      setLeads(prevLeads =>
        prevLeads.map(lead =>
          lead.id === leadId ? { ...lead, status } : lead
        )
      );
    }
  };

  const getStatusConfig = (status: LeadStatus) => {
    switch (status) {
      case 'completed':
        return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', label: 'Completed' };
      case 'pending':
        return { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Pending' };
      case 'retry':
        return { icon: RefreshCw, color: 'text-blue-600', bg: 'bg-blue-50', label: 'Retry' };
      case 'not_interested':
        return { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'Not Interested' };
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    const matchesSearch = 
      lead.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.business_name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const statusCounts = {
    all: leads.length,
    pending: leads.filter(l => l.status === 'pending').length,
    completed: leads.filter(l => l.status === 'completed').length,
    retry: leads.filter(l => l.status === 'retry').length,
    not_interested: leads.filter(l => l.status === 'not_interested').length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leads Management</h1>
          <p className="text-gray-600 mt-1">Manage and track your business leads</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Users size={18} />
          <span>{leads.length} Total Leads</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Pending', count: statusCounts.pending, color: 'yellow' },
          { label: 'Completed', count: statusCounts.completed, color: 'green' },
          { label: 'Retry', count: statusCounts.retry, color: 'blue' },
          { label: 'Not Interested', count: statusCounts.not_interested, color: 'red' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            <p className={`text-2xl font-bold mt-1 text-${stat.color}-600`}>{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name, email, or business..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as LeadStatus | 'all')}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white"
            >
              <option value="all">All Status ({statusCounts.all})</option>
              <option value="pending">Pending ({statusCounts.pending})</option>
              <option value="completed">Completed ({statusCounts.completed})</option>
              <option value="retry">Retry ({statusCounts.retry})</option>
              <option value="not_interested">Not Interested ({statusCounts.not_interested})</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {filteredLeads.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Users className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-lg font-medium">No leads found</p>
            <p className="text-sm mt-1">
              {searchQuery || filterStatus !== 'all'
                ? 'Try adjusting your filters'
                : 'New leads will appear here'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Business Details
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Services
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLeads.map((lead) => {
                  const statusConfig = getStatusConfig(lead.status);
                  const StatusIcon = statusConfig.icon;

                  return (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      {/* Contact Info */}
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="font-medium text-gray-900">
                            {lead.first_name} {lead.last_name}
                          </p>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Mail size={14} />
                            <span>{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Phone size={14} />
                            <span>{lead.phone}</span>
                          </div>
                        </div>
                      </td>

                      {/* Business Details */}
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 font-medium text-gray-900">
                            <Building2 size={14} />
                            <span>{lead.business_name}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Briefcase size={14} />
                            <span>{lead.industry}</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            {lead.employees} employees
                          </p>
                        </div>
                      </td>

                      {/* Services */}
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {lead.services.slice(0, 3).map((service, idx) => (
                            <span
                              key={idx}
                              className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded"
                            >
                              {service}
                            </span>
                          ))}
                          {lead.services.length > 3 && (
                            <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                              +{lead.services.length - 3}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${statusConfig.bg}`}>
                          <StatusIcon size={14} className={statusConfig.color} />
                          <span className={`text-sm font-medium ${statusConfig.color}`}>
                            {statusConfig.label}
                          </span>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar size={14} />
                          <span>{new Date(lead.created_at).toLocaleDateString()}</span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="relative">
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                            className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 outline-none"
                          >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="retry">Retry</option>
                            <option value="not_interested">Not Interested</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
