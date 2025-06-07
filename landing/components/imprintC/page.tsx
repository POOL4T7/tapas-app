import Link from 'next/link';
import React from 'react';

const Imprint = ({ langData }: any) => {
  const {
    title,
    tmg,
    branchTiltl,
    company,
    address,
    email,
    website,
    alternativeBranches,
    liabilityInsurance,
    supervisoryAuthority,
    disputeResolution,
    liabilityForContent,
    liabilityForLinks,
    copyright,
  } = langData.imprint;

  return (
    <div className='max-w-4xl mx-auto p-6 text-white'>
      <h1
        // style={{ color: '#800000' }}
        className='text-4xl font-bold mb-8 text-center'
      >
        {title}
      </h1>

      <h2 style={{ color: '#f5a524' }} className='text-2xl font-semibold mb-4'>
        {tmg}
      </h2>
      <p className='text-base leading-7 mb-6'>
        {company}
        <br />
        {address}
        <br />
        Email:{' '}
        <Link  href={`mailto:${email}`} className='text-blue-600'>
          {email}
        </Link>
        <br />
        website:  <Link  href={website} className='text-blue-600'>
          {website}
        </Link>
      </p>

      {/* Rendering Alternative Branches */}
      <h2 style={{ color: '#f5a524' }} className='text-2xl font-semibold mb-4'>
        {branchTiltl}
      </h2>
      {alternativeBranches.map((branch: any, index: any) => (
        <p key={index} className='text-base leading-7 mb-6'>
          {branch.title}
          <br />
          {branch.details}
        </p>
      ))}

      {/* Liability Insurance Section */}
      <h2 style={{ color: '#f5a524' }} className='text-2xl font-semibold mb-4'>
        {liabilityInsurance.title}
      </h2>
      <p className='text-base leading-7 mb-6'>{liabilityInsurance.details}</p>

      {/* Supervisory Authority Section */}
      <h2 style={{ color: '#f5a524' }} className='text-2xl font-semibold mb-4'>
        {supervisoryAuthority.title}
      </h2>
      <p className='text-base leading-7 mb-6'>{supervisoryAuthority.details}</p>

      {/* Dispute Resolution Section */}
      <h2 style={{ color: '#f5a524' }} className='text-2xl font-semibold mb-4'>
        {disputeResolution.title}
      </h2>
      {disputeResolution.details.map((detail: any, index: any) => (
        <p key={index} className='text-base leading-7 mb-2'>
          {detail.platform ? (
            <>
              {detail.platform}{' '}
              <Link 
                href={detail.link}
                target='_blank'
                rel='noopener  noreferrer'
                className='text-blue-600'
              >
                {detail.link}
              </Link>
            </>
          ) : (
            detail.note
          )}
        </p>
      ))}

      {/* Liability for Content Section */}
      <h2 style={{ color: '#f5a524' }} className='text-2xl font-semibold mb-4'>
        {liabilityForContent.title}
      </h2>
      {liabilityForContent.details.map((detail: any, index: any) => (
        <p key={index} className='text-base leading-7 mb-2'>
          {detail}
        </p>
      ))}

      {/* Liability for Links Section */}
      <h2 style={{ color: '#f5a524' }} className='text-2xl font-semibold mb-4'>
        {liabilityForLinks.title}
      </h2>
      {liabilityForLinks.details.map((detail: any, index: any) => (
        <p key={index} className='text-base leading-7 mb-2'>
          {detail}
        </p>
      ))}

      {/* Copyright Section */}
      <h2 style={{ color: '#f5a524' }} className='text-2xl font-semibold mb-4'>
        {copyright.title}
      </h2>
      {copyright.details.map((detail: any, index: any) => (
        <p key={index} className='text-base leading-7 mb-2'>
          {detail}
        </p>
      ))}
    </div>
  );
};

export default Imprint;
