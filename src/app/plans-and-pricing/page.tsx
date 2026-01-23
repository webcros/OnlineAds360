import { Metadata } from 'next';
import PlanPricingForm from '@/components/PlanPricingForm';

export const metadata: Metadata = {
  title: 'Plans & Pricing',
  description: 'Tell us about your business and discover the best plans and pricing for your needs.',
};

export default function PlansAndPricingPage() {
  return <PlanPricingForm />;
}
