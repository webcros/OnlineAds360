'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { FileText, MessageSquare, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardStats() {
  const [stats, setStats] = useState({
    blogCount: 0,
    messageCount: 0,
    loading: true
  });
  const supabase = createClient();

  useEffect(() => {
    const fetchStats = async () => {
      const [blogsRes, messagesRes] = await Promise.all([
        supabase.from('blogs').select('*', { count: 'exact', head: true }),
        supabase.from('contact_messages').select('*', { count: 'exact', head: true })
      ]);

      setStats({
        blogCount: blogsRes.count || 0,
        messageCount: messagesRes.count || 0,
        loading: false
      });
    };

    fetchStats();
  }, [supabase]);

  const cards = [
    {
      name: 'Total Blog Posts',
      value: stats.blogCount,
      icon: FileText,
      color: 'bg-blue-500',
      href: '/admin/blog'
    },
    {
      name: 'Contact Messages',
      value: stats.messageCount,
      icon: MessageSquare,
      color: 'bg-green-500',
      href: '/admin/messages'
    },
    {
      name: 'New Leads',
      value: stats.messageCount, // Using messageCount as a proxy for leads
      icon: Users,
      color: 'bg-orange-500',
      href: '/admin/messages'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here&apos;s an overview of your site&apos;s performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card) => (
          <Link 
            key={card.name} 
            href={card.href}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.color} p-3 rounded-xl text-white`}>
                <card.icon size={24} />
              </div>
              {stats.loading ? (
                <div className="h-8 w-12 bg-gray-100 animate-pulse rounded"></div>
              ) : (
                <span className="text-2xl font-bold text-gray-900">{card.value}</span>
              )}
            </div>
            <h3 className="text-sm font-medium text-gray-500">{card.name}</h3>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link 
              href="/admin/blog/new"
              className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl border border-blue-100 text-blue-700 hover:bg-blue-100 transition-colors gap-2"
            >
              <FileText size={24} />
              <span className="font-semibold text-sm">New Blog</span>
            </Link>
            <Link 
              href="/admin/messages"
              className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-xl border border-green-100 text-green-700 hover:bg-green-100 transition-colors gap-2"
            >
              <MessageSquare size={24} />
              <span className="font-semibold text-sm">View Messages</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
