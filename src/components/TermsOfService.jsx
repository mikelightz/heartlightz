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
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">1. Digital Licensing Categories & Usage</h2>
          <p className="mb-4">All audio files, instrumentals, 3D visualizers, and synthesis presets sold through HeART Lightz are 100% original works, created and owned by HeART Lightz. Upon purchase, you are granted a specific usage license based on the product category:</p>
          
          <h3 className="text-white font-bold mb-2 mt-6">A. Instrumental & Beat Leases (Artist Lane)</h3>
          <p className="mb-4">Purchases of instrumentals are governed by our Tiered Licensing System (e.g., Basic, Standard, Premium, Unlimited, Exclusive).</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong className="text-white">Commercial Caps:</strong> Streaming caps, music video allowances, and exact deliverable formats for each tier are explicitly defined on our official Licensing Page at the time of purchase.</li>
            <li><strong className="text-white">Publishing Splits:</strong> For all instrumental licenses (unless otherwise negotiated in an Exclusive agreement), HeART Lightz retains a 50% writer's share on the underlying composition.</li>
          </ul>

          <h3 className="text-white font-bold mb-2 mt-6">B. Royalty-Free Utility Assets (Creator Lane)</h3>
          <p className="mb-4">Purchases of sample packs, drum kits, custom synthesizer presets, and background frequency soundscapes include a Standard Non-Exclusive, Royalty-Free License.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Usage:</strong> You may use these assets in your own original music productions, DJ sets, video content, and multimedia projects without paying backend royalties or clearance fees.</li>
            <li><strong className="text-white">Commercial Caps:</strong> There are no streaming caps or publishing splits required for these specific utility assets.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">2. Content ID & Redistribution Prohibitions</h2>
          <p className="mb-4">To protect the integrity of the HeART Lightz catalog and the rights of all buyers, the following rules are strictly enforced:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong className="text-white">No Content ID Registration:</strong> Because non-exclusive instrumental leases mean multiple artists may license the same track, customers are strictly prohibited from registering their derivative songs with YouTube Content ID or any other global digital fingerprinting service. (Note: Buyers of "Exclusive Rights" instrumentals are exempt from this specific rule).</li>
            <li><strong className="text-white">No Redistribution of Assets (ALL TIERS, INCLUDING EXCLUSIVE):</strong> Under no circumstances does any license tier grant the buyer the right to resell, lease, sub-license, or freely distribute the raw, isolated audio files or track stems. Customers may not isolate individual sound design elements (e.g., a specific drum hit, synth patch, or stem) from any product to repackage, upload, or sell as part of a competing sample pack or sound library.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">3. Refund Policy</h2>
          <p className="mb-4">Due to the irrevocable nature of digital downloads, <strong className="text-white">all sales are final.</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Once a file has been downloaded or the license key has been accessed, we cannot offer refunds or exchanges.</li>
            <li>We recommend reviewing all product descriptions, licensing terms, and audio previews carefully before finalizing your purchase.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">4. Intellectual Property</h2>
          <p className="mb-4">All content included in this shop—including but not limited to audio files, 3D visualizers, stems, and synthesis recipes—is the sole intellectual property of HeART Lightz.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unauthorized use of the brand name or visual assets for your own promotion is prohibited.</li>
            <li>Your purchase grants you a license to use the content according to your selected tier, not ownership of the underlying copyrights.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">5. Technical Support & Liability</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">"As-Is" Basis:</strong> All digital products are provided "as-is" without warranty of any kind.</li>
            <li><strong className="text-white">Compatibility:</strong> While we strive for universal compatibility, it is the user's responsibility to ensure they have the necessary software (e.g., Logic Pro X, Xfer Serum, Unreal Engine) to utilize the files.</li>
            <li><strong className="text-white">Liability:</strong> HeART Lightz is not liable for any technical issues, project corruption, data loss, or damages resulting from the use of these digital products.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#FCDFB9] font-bold text-lg mb-4 tracking-widest uppercase">6. Customer Conduct</h2>
          <p>Any attempt to circumvent our digital rights management, violate the Content ID terms, redistribute raw assets, or engage in fraudulent chargebacks will result in a permanent ban from the store, legal action where applicable, and the immediate revocation of all previously granted licenses.</p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
