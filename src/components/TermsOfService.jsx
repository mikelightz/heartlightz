import React from 'react';

const TermsOfService = () => {
  return (
    <section className="w-full min-h-screen py-12 px-4 md:px-8 max-w-4xl mx-auto pb-32">
      <div className="mb-12 text-center bg-black/50 p-8 frame-outset">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-3d-lg mb-4 tracking-wider text-[#94150D]">Terms of Service</h1>
        <p className="text-[#FCDFB9] text-sm md:text-base tracking-widest uppercase font-bold">
          HeART Lightz Digital Shop
        </p>
      </div>

      <div className="bg-[#0a0a0a] frame-inset p-8 md:p-12 space-y-8 text-[#a3a3a3] text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">1. Digital License & Usage</h2>
          <p className="mb-4">Upon purchase, HeART Lightz grants you a non-exclusive, non-transferable license to use the acquired files (Audio, MIDI, or Synthesis Patches) according to the following terms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Royalty-Free Usage:</strong> You may use these sounds in your own original music productions, DJ sets, and multimedia projects without paying additional royalties.</li>
            <li><strong className="text-white">No Redistribution:</strong> You are strictly prohibited from reselling, leasing, or redistributing the raw files, stems, or presets as standalone products or as part of a competing sample pack.</li>
            <li><strong className="text-white">Attribution:</strong> While appreciated, credit to HeART Lightz is not required for commercial use of these assets in your creative works.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">2. Refund Policy</h2>
          <p className="mb-4">Due to the irrevocable nature of digital downloads, all sales are final.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Once a file has been downloaded or the license key has been accessed, we cannot offer refunds or exchanges.</li>
            <li>We recommend reviewing all product descriptions and audio previews carefully before finalizing your purchase.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">3. Intellectual Property</h2>
          <p className="mb-4">All content included in this shop—including but not limited to audio files, 3D visualizers, and synthesis recipes—is the sole property of HeART Lightz.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unauthorized use of the brand name or visual assets for your own promotion is prohibited.</li>
            <li>Your purchase grants you a license to use the content, not ownership of the underlying copyrights.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">4. Technical Support & Liability</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">"As-Is" Basis:</strong> All digital products are provided "as-is" without warranty of any kind.</li>
            <li><strong className="text-white">Compatibility:</strong> While we strive for universal compatibility, it is the user's responsibility to ensure they have the necessary software (e.g., Logic Pro X, Xfer Serum) to utilize the files.</li>
            <li><strong className="text-white">Liability:</strong> HeART Lightz is not liable for any technical issues, data loss, or damages resulting from the use of these digital products.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">5. Customer Conduct</h2>
          <p>Any attempt to circumvent our digital rights management or engage in fraudulent chargebacks will result in a permanent ban from the store and the revocation of all previously granted licenses.</p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
