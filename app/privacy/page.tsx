import Link from "next/link";
import { LogoWordmark } from "@/components/LogoWordmark";

export const metadata = {
  title: "Privacy Policy — AllotIQ",
  description: "How AllotIQ handles your data: what stays on your device, and the few things that ever touch a network.",
};

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-4 text-slate-400 leading-relaxed">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-bold text-slate-200 mt-6 mb-2">{children}</h3>;
}

const TOC = [
  ["infocollect", "1. What Information Do We Collect?"],
  ["infouse", "2. How Do We Process Your Information?"],
  ["whoshare", "3. When And With Whom Do We Share Your Personal Information?"],
  ["ai", "4. Do We Offer Artificial Intelligence-Based Products?"],
  ["inforetain", "5. How Long Do We Keep Your Information?"],
  ["infosafe", "6. How Do We Keep Your Information Safe?"],
  ["infominors", "7. Do We Collect Information From Minors?"],
  ["privacyrights", "8. What Are Your Privacy Rights?"],
  ["dnt", "9. Controls For Do-Not-Track Features"],
  ["uslaws", "10. Do United States Residents Have Specific Privacy Rights?"],
  ["clausea", "11. How AllotIQ Is Built"],
  ["policyupdates", "12. Do We Make Updates To This Notice?"],
  ["contact", "13. How Can You Contact Us About This Notice?"],
  ["request", "14. How Can You Review, Update, Or Delete The Data We Collect From You?"],
] as const;

const CATEGORY_ROWS: { letter: string; name: string; examples: string; collected: "YES" | "NO" }[] = [
  { letter: "A", name: "Identifiers", examples: "Real name, unique personal identifier, and account name (state medical marijuana Registry ID)", collected: "YES" },
  { letter: "B", name: "Personal information as defined in the California Customer Records statute", examples: "Name and medical/health insurance information (education, employment, and financial history do not apply)", collected: "YES" },
  { letter: "C", name: "Protected classification characteristics under state or federal law", examples: "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data", collected: "NO" },
  { letter: "D", name: "Commercial information", examples: "Cannabis purchase/dispensation history (financial and payment information does not apply — payment is handled entirely by the App Store/Play Store)", collected: "YES" },
  { letter: "E", name: "Biometric information", examples: "Device-level Face ID/Touch ID/fingerprint authentication result (we never receive or store the underlying fingerprint or facial data itself)", collected: "YES" },
  { letter: "F", name: "Internet or other similar network activity", examples: "Browsing history, search history, online behavior, and interactions with advertisements", collected: "NO" },
  { letter: "G", name: "Geolocation data", examples: "Device location, used transiently for dispensary proximity — not stored", collected: "YES" },
  { letter: "H", name: "Audio, electronic, sensory, or similar information", examples: "Voice recordings (Ask Mary) and scanned images (receipts/labels/QR codes), processed entirely on-device", collected: "YES" },
  { letter: "I", name: "Professional or employment-related information", examples: "Job title, work history, and professional qualifications", collected: "NO" },
  { letter: "J", name: "Education Information", examples: "Student records and directory information", collected: "NO" },
  { letter: "K", name: "Inferences drawn from collected personal information", examples: "A profile or summary about an individual's preferences and characteristics", collected: "NO" },
  { letter: "L", name: "Sensitive personal information", examples: "Account login information (for the Florida MMUR portal, not an AllotIQ account), biometric data, health data, and precise geolocation", collected: "YES" },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-brand-slate selection:bg-brand-emerald/30">
      <nav className="w-full flex items-center justify-between gap-2 px-4 sm:px-8 py-3 sm:py-4 border-b border-white/5">
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-lg shadow-brand-emerald/20 flex-shrink-0 relative">
            <img src="/icon.png" alt="AllotIQ Icon" className="w-full h-full object-cover" />
          </div>
          <LogoWordmark className="text-4xl sm:text-5xl" />
        </Link>
        <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-10">Last updated: August 31, 2026</p>

        <p className="text-slate-400 leading-relaxed mb-4">
          This Privacy Policy for AllotIQ (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) describes how and why we
          might access, collect, store, use, and/or share (&quot;process&quot;) your personal information when
          you use our services (&quot;Services&quot;), including when you:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-4">
          <li>Download and use our mobile application, AllotIQ, or any other application of ours that links to this Privacy Policy.</li>
          <li>
            Use AllotIQ. AllotIQ is a mobile app that helps Florida medical marijuana patients and caregivers track
            their exact dispensable allotment under Florida Administrative Code Rule 64-4.224. It calculates
            real-time balances across smokable flower and each non-smoking route (vapes, edibles, oral, sublingual,
            topical, and suppositories), predicts exactly when purchased amounts roll back into your available
            balance, and tracks upcoming doctor recertification and state ID card renewal deadlines. Patients can
            optionally sync their official Florida MMUR registry data directly into the app, ask a hands-free
            on-device voice assistant about their balances, and scan product QR codes to view official lab test
            results. All calculations, medical records, and login credentials are stored and processed locally on
            the patient&apos;s own device — not on any server we operate.
          </li>
          <li>Engage with us in other related ways, including any marketing or events.</li>
        </ul>
        <p className="text-slate-400 leading-relaxed mb-12">
          <strong className="text-slate-200">Questions or concerns?</strong> Reading this Privacy Policy will help
          you understand your privacy rights and choices. We are responsible for making decisions about how your
          personal information is processed. If you do not agree with our policies and practices, please do not use
          our Services. If you still have any questions or concerns, please contact us at{" "}
          <a href="mailto:privacy@allotiq.com" className="text-brand-emerald hover:underline">privacy@allotiq.com</a>.
        </p>

        <Section title="Summary of Key Points">
          <p><em>This summary provides key points from our Privacy Policy — use the table of contents below to jump to any section in full.</em></p>
          <p><strong className="text-slate-200">What personal information do we process?</strong> When you use our Services, we may process personal information depending on how you interact with the app and the features you use.</p>
          <p><strong className="text-slate-200">Do we process any sensitive personal information?</strong> Yes — health data, precise geolocation, biometric authentication results, and your state medical marijuana Registry ID. We do not process race, ethnicity, sexual orientation, or religious belief information; none of that applies to this app.</p>
          <p><strong className="text-slate-200">Do we collect any information from third parties?</strong> Only your own records, retrieved directly from the official Florida MMUR state registry using credentials you provide, at your explicit request. We do not purchase or receive data about you from data brokers, advertisers, or marketing partners.</p>
          <p><strong className="text-slate-200">How do we process your information?</strong> Primarily to calculate your dispensable allotment under Florida law, respond to your support inquiries, and comply with legal obligations. We process your information only when we have a valid reason to do so.</p>
          <p><strong className="text-slate-200">How do we keep your information safe?</strong> By design, most of it never leaves your device. See{" "}
            <a href="#clausea" className="text-brand-emerald hover:underline">How AllotIQ Is Built</a> for specifics.</p>
          <p><strong className="text-slate-200">How do you exercise your rights?</strong> Visit{" "}
            <Link href="/privacy-request" className="text-brand-emerald hover:underline">allotiq.com/privacy-request</Link>{" "}
            or email <a href="mailto:privacy@allotiq.com" className="text-brand-emerald hover:underline">privacy@allotiq.com</a>.</p>
        </Section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
          <ol className="list-none space-y-1">
            {TOC.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-brand-emerald hover:underline text-sm">{label}</a>
              </li>
            ))}
          </ol>
        </section>

        <Section id="infocollect" title="1. What Information Do We Collect?">
          <SubHeading>Personal information you disclose to us</SubHeading>
          <p><em>In short: we collect personal information that you provide to us.</em></p>
          <p>We collect personal information that you voluntarily provide when you use the app or contact us. This may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Names</li>
            <li>Usernames and passwords for the Florida MMUR portal (not an AllotIQ account — there is no AllotIQ account system)</li>
            <li>State medical marijuana Registry ID</li>
            <li>Medical recommendation/certification dates</li>
            <li>Purchase/dispensation history</li>
          </ul>
          <p><strong className="text-slate-200">Sensitive information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Health data</li>
            <li>Your state medical marijuana Registry ID (a government identifier)</li>
          </ul>
          <p>
            <strong className="text-slate-200">Application data.</strong> If you grant permission, we also collect:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <em>Geolocation.</em> Used to detect proximity to Florida dispensaries for purchase-logging reminders.
              This is not stored — see Section 5.
            </li>
            <li>
              <em>Mobile device access</em> to your calendar, camera, microphone, storage, and biometric
              authentication (Face ID/Touch ID/fingerprint). You can change these permissions at any time in your
              device&apos;s settings.
            </li>
          </ul>
          <p>All personal information you provide to us must be true, complete, and accurate.</p>

          <SubHeading>Information collected from other sources</SubHeading>
          <p><em>In short: the only information we obtain that you didn&apos;t type directly into the app is your own record, pulled from the official Florida MMUR state registry, at your request.</em></p>
          <p>
            When you use the MMUR sync feature, your device retrieves your own doctor recommendation orders,
            dispensation history, and card status directly from the State of Florida&apos;s official MMUR registry,
            using the credentials you provide. This is your own data, retrieved only because you logged in with your
            own credentials and explicitly requested it — it is not data purchased, brokered, or obtained from
            advertisers, data brokers, or any other third party.
          </p>
        </Section>

        <Section id="infouse" title="2. How Do We Process Your Information?">
          <p><em>In short: we process your information to deliver the app&apos;s core function, respond to your inquiries, protect the Services, and comply with the law.</em></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-slate-200">To deliver services.</strong> To calculate your dispensable medical marijuana allotment under Florida Administrative Code Rule 64-4.224, based on your synced or manually entered patient records.</li>
            <li><strong className="text-slate-200">To respond to user inquiries/offer support.</strong> To respond to your questions and resolve issues you might have.</li>
            <li><strong className="text-slate-200">To request feedback.</strong> To ask about your experience using the Services.</li>
            <li><strong className="text-slate-200">To protect our Services.</strong> As part of efforts to keep the Services safe and secure.</li>
            <li><strong className="text-slate-200">To comply with our legal obligations.</strong> To respond to legal requests and exercise or defend our legal rights.</li>
          </ul>
        </Section>

        <Section id="whoshare" title="3. When And With Whom Do We Share Your Personal Information?">
          <p><em>In short: we may share information in the specific situation described below.</em></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-slate-200">Business transfers.</strong> We may share or transfer your information in connection with, or during negotiation of, any merger, sale of company assets, financing, or acquisition of all or part of our business by another company.</li>
          </ul>
          <p>Outside of that scenario, we do not share your personal information with any third party.</p>
        </Section>

        <Section id="ai" title="4. Do We Offer Artificial Intelligence-Based Products?">
          <p><em>In short: yes, two specific on-device features use real machine-learning models — everything else in the app, including the assistant&apos;s reasoning, is deterministic rule-based logic, not AI.</em></p>
          <p><strong className="text-slate-200">Our AI features</strong> are used for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Natural language processing — transcribing your spoken question to Mary into text.</li>
            <li>Image analysis — reading receipts, product labels, and QR codes via the camera.</li>
          </ul>
          <p>
            <strong className="text-slate-200">How we process your data using AI.</strong> Both models are
            open-source, downloaded once, and run entirely on your own device. There is no third-party AI platform
            or API involved — your voice recordings and photos are never uploaded anywhere to be processed.
          </p>
          <p><strong className="text-slate-200">How to opt out.</strong> No account or contact required — simply use the manual alternatives built into the app. Type your question instead of using the microphone, and enter purchases manually instead of scanning a receipt or label. If you never use the microphone or camera-scan features, the on-device AI models are never downloaded or run on your device.</p>
        </Section>

        <Section id="inforetain" title="5. How Long Do We Keep Your Information?">
          <p><em>In short: for as long as it&apos;s on your device — we don&apos;t hold a copy anywhere else.</em></p>
          <p>
            We do not retain your information on any server we operate — there isn&apos;t one. Your patient profile,
            purchase history, and MMUR credentials exist only in an encrypted database on your own device, for as
            long as you keep the app installed. Deleting a record within the app removes it immediately; uninstalling
            the app removes everything. There is no copy anywhere else for us to retain or delete on your behalf.
          </p>
          <p>Your precise location specifically is not stored at all — it is used only in the moment to determine proximity to nearby dispensaries and is discarded immediately after.</p>
        </Section>

        <Section id="infosafe" title="6. How Do We Keep Your Information Safe?">
          <p><em>In short: through real technical measures, not just a promise.</em></p>
          <p>
            We use biometric app-lock (Face ID/Touch ID/fingerprint), store your MMUR credentials in your phone&apos;s
            secure hardware keychain rather than as plain text, and encrypt exported backup files with real
            AES-256-CBC encryption plus HMAC integrity verification, protected by a passcode you choose. Because
            there is no central server holding your data, the most common attack surface most apps have simply
            doesn&apos;t exist here. That said, no method of electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </Section>

        <Section id="infominors" title="7. Do We Collect Information From Minors?">
          <p><em>In short: no.</em></p>
          <p>
            We do not knowingly collect, solicit data from, or market to children under 18 years of age. By using the
            Services, you represent that you are at least 18. If we learn that personal information from a user
            under 18 has been collected, we will take reasonable measures to promptly delete it. If you become aware
            of any such data, please contact us at{" "}
            <a href="mailto:privacy@allotiq.com" className="text-brand-emerald hover:underline">privacy@allotiq.com</a>.
          </p>
        </Section>

        <Section id="privacyrights" title="8. What Are Your Privacy Rights?">
          <p><em>In short: you may review, access, correct, or delete your information at any time, depending on your state of residence.</em></p>
          <p>
            <strong className="text-slate-200">Withdrawing your consent.</strong> If we are relying on your consent
            to process your personal information, you have the right to withdraw it at any time by contacting us —
            see Section 13 below. This will not affect the lawfulness of processing before withdrawal.
          </p>
          <p>If you have questions about your privacy rights, email <a href="mailto:privacy@allotiq.com" className="text-brand-emerald hover:underline">privacy@allotiq.com</a>.</p>
        </Section>

        <Section id="dnt" title="9. Controls For Do-Not-Track Features">
          <p>
            Most browsers and some mobile operating systems include a Do-Not-Track (&quot;DNT&quot;) feature. No
            uniform standard for recognizing DNT signals has been finalized, so we do not currently respond to them.
            This is a low-stakes disclosure for this app in particular, since there is no tracking to opt out of in
            the first place — no analytics or advertising technology exists here to respond to such a signal.
          </p>
        </Section>

        <Section id="uslaws" title="10. Do United States Residents Have Specific Privacy Rights?">
          <p>
            <em>
              In short: if you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana,
              Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode
              Island, Tennessee, Texas, Utah, or Virginia, you may have the right to access, correct, obtain a copy
              of, or delete your personal information, and to withdraw consent to our processing of it. These rights
              may be limited in some circumstances by applicable law.
            </em>
          </p>

          <SubHeading>Categories of Personal Information We Collect</SubHeading>
          <p>The table below shows the categories of personal information collected in the past twelve months, per applicable state law definitions.</p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-3 text-slate-200">Category</th>
                  <th className="text-left py-2 pr-3 text-slate-200">Examples</th>
                  <th className="text-left py-2 text-slate-200">Collected</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORY_ROWS.map((row) => (
                  <tr key={row.letter} className="border-b border-white/5 align-top">
                    <td className="py-2 pr-3 whitespace-nowrap">{row.letter}. {row.name}</td>
                    <td className="py-2 pr-3">{row.examples}</td>
                    <td className={`py-2 font-semibold ${row.collected === "YES" ? "text-brand-emerald" : "text-slate-500"}`}>{row.collected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            We only collect sensitive personal information as permitted by law or with your consent. We do not
            collect or process sensitive personal information for the purpose of inferring characteristics about
            you.
          </p>

          <SubHeading>Will Your Information Be Shared With Anyone Else?</SubHeading>
          <p>
            We have not disclosed, sold, or shared any personal information with third parties for a business or
            commercial purpose in the preceding twelve months, and we will not do so in the future.
          </p>

          <SubHeading>Your Rights</SubHeading>
          <p>You have rights under certain US state data protection laws, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Right to know whether we are processing your personal data</li>
            <li>Right to access your personal data</li>
            <li>Right to correct inaccuracies in your personal data</li>
            <li>Right to request deletion of your personal data</li>
            <li>Right to obtain a copy of the personal data you previously shared with us</li>
            <li>Right to non-discrimination for exercising your rights</li>
            <li>Right to opt out of the collection of sensitive data and personal data collected through a voice or facial recognition feature (Florida)</li>
          </ul>
          <p>
            We do not engage in targeted advertising, sale of personal data, or automated profiling with legal or
            similarly significant effects, so the corresponding opt-out rights are not applicable in practice — there
            is nothing to opt out of.
          </p>

          <SubHeading>How to Exercise Your Rights</SubHeading>
          <p>
            Visit{" "}
            <Link href="/privacy-request" className="text-brand-emerald hover:underline">allotiq.com/privacy-request</Link>{" "}
            or email{" "}
            <a href="mailto:privacy@allotiq.com" className="text-brand-emerald hover:underline">privacy@allotiq.com</a>.
            You may designate an authorized agent to make a request on your behalf; we may require proof of that
            authorization.
          </p>

          <SubHeading>Request Verification</SubHeading>
          <p>
            Upon receiving your request, we will verify your identity using only the information provided in the
            request itself, since we don&apos;t hold a separate database to cross-reference against.
          </p>

          <SubHeading>Appeals</SubHeading>
          <p>
            If we decline to act on your request, you may appeal by emailing{" "}
            <a href="mailto:privacy@allotiq.com" className="text-brand-emerald hover:underline">privacy@allotiq.com</a>.
            We will respond in writing with the reasons for our decision. If your appeal is denied, you may submit a
            complaint to your state attorney general.
          </p>

          <SubHeading>California &quot;Shine the Light&quot; Law</SubHeading>
          <p>
            California Civil Code Section 1798.83 permits California residents to request, once a year and free of
            charge, information about what personal information (if any) we&apos;ve disclosed to third parties for
            direct marketing purposes. As stated above, we do not share information with third parties for their own
            marketing purposes — if you&apos;d still like to submit this request, contact us using the details in
            Section 13.
          </p>
        </Section>

        <Section id="clausea" title="11. How AllotIQ Is Built">
          <p>
            Unlike most apps, AllotIQ does not operate a server that stores your personal or medical information.
            Your patient profile, purchase history, and login credentials are stored exclusively in an encrypted
            database on your own device. When you sync with the Florida MMUR registry, your device connects directly
            to the State of Florida&apos;s official portal — that connection is never routed through or logged by us.
            When you use on-device AI features (voice assistant or receipt/label scanning), your voice recordings and
            photos are processed entirely on your device and are never uploaded anywhere. If our company ceased to
            exist tomorrow, your data would be entirely unaffected, because we never had a copy of it to begin with.
          </p>
        </Section>

        <Section id="policyupdates" title="12. Do We Make Updates To This Notice?">
          <p><em>In short: yes, as necessary to stay compliant with relevant laws.</em></p>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by a revised
            &quot;Last updated&quot; date at the top of this page. We encourage you to review it periodically.
          </p>
        </Section>

        <Section id="contact" title="13. How Can You Contact Us About This Notice?">
          <p>
            If you have questions or comments about this notice, contact our privacy contact by email at{" "}
            <a href="mailto:privacy@allotiq.com" className="text-brand-emerald hover:underline">privacy@allotiq.com</a>,
            {" "}or by post at:
          </p>
          <p className="text-slate-300">
            AllotIQ<br />
            Data Protection Officer<br />
            1021 Rosetree Ln<br />
            Tarpon Springs, FL 34689-2854<br />
            United States
          </p>
        </Section>

        <Section id="request" title="14. How Can You Review, Update, Or Delete The Data We Collect From You?">
          <p>
            Based on applicable law in your state of residence, you may have the right to request access to, details
            about, correction of, or deletion of the personal information we hold about you, and to withdraw your
            consent to its processing. To make this request, visit{" "}
            <Link href="/privacy-request" className="text-brand-emerald hover:underline">allotiq.com/privacy-request</Link>.
          </p>
        </Section>
      </div>

      <footer className="border-t border-white/5 py-12 px-6 text-center text-slate-500">
        <p>Made for Florida Patients (Rule 64-4.224)</p>
      </footer>
    </main>
  );
}
