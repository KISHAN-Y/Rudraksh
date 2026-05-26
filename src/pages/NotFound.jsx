import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-page-bg px-4 py-20">
      <div className="text-center max-w-md">
        <div className="text-[120px] font-bold font-heading text-primary-light leading-none mb-6">
          404
        </div>
        <SectionHeading 
          title="Page Not Found" 
          subtitle="Oops!"
          className="mb-6"
        />
        <p className="text-text-secondary mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="flex items-center gap-2 mx-auto">
            <ArrowLeft size={18} />
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
