'use client';

interface ContactButtonProps {
  type: 'email' | 'phone';
  variant?: 'primary' | 'secondary' | 'pill';
  className?: string;
  children?: React.ReactNode;
}

export default function ContactButton({
  type,
  variant = 'primary',
  className = '',
  children
}: ContactButtonProps) {
  const handleClick = () => {
    if (type === 'email') {
      const emailParts = process.env.NEXT_PUBLIC_COMPANY_EMAIL?.split('@') || ['', ''];
      const [local, domain] = emailParts;
      const email = [local, '@', domain].join('');
      window.location.href = `mailto:${email}`;
    } else if (type === 'phone') {
      const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE?.replace(/\s/g, '') || '';
      window.location.href = `tel:${phone}`;
    }
  };

  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-600/20',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700',
    pill: 'bg-gray-900/50 backdrop-blur-xl rounded-full border border-gray-800 text-gray-300 hover:text-white hover:border-blue-500/50'
  };

  const defaultContent = type === 'email' ? (
    <>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      {variant === 'pill' ? <span className="text-sm font-medium">{process.env.NEXT_PUBLIC_COMPANY_EMAIL}</span> : 'Email Us Directly'}
    </>
  ) : (
    <>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      {variant === 'pill' ? <span className="text-sm font-medium">{process.env.NEXT_PUBLIC_COMPANY_PHONE}</span> : 'Call Us'}
    </>
  );

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-6 py-3 font-medium transition-all duration-200 hover:scale-105 ${variantStyles[variant]} ${className}`}
    >
      {children || defaultContent}
    </button>
  );
}
