import Link from "next/link";
import { AQIconLogo } from "@/components/LogoWordmark";

export const metadata = {
  title: "Terms of Service — AllotIQ",
  description: "The terms that govern your use of AllotIQ, the Florida medical marijuana allotment tracker.",
};

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-4 text-slate-400 leading-relaxed">{children}</div>
    </section>
  );
}

const TOC = [
  ["agreement", "1. Agreement to These Terms"],
  ["eligibility", "2. Who Can Use AllotIQ"],
  ["description", "3. What AllotIQ Is — and Isn't"],
  ["data", "4. Your Data"],
  ["mmur", "5. MMUR Registry Sync"],
  ["license", "6. License and Acceptable Use"],
  ["ip", "7. Intellectual Property"],
  ["thirdparty", "8. Third-Party Services"],
  ["disclaimer", "9. Disclaimer of Warranties"],
  ["liability", "10. Limitation of Liability"],
  ["indemnification", "11. Indemnification"],
  ["termination", "12. Termination"],
  ["law", "13. Governing Law"],
  ["changes", "14. Changes to These Terms"],
  ["contact", "15. Contact Us"],
] as const;

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-brand-slate selection:bg-brand-emerald/30">
      <nav className="w-full flex items-center justify-between gap-2 px-4 sm:px-8 py-3 sm:py-4 border-b border-white/5">
        <Link href="/" className="flex items-center min-w-0">
          <AQIconLogo className="h-10 sm:h-12" priority />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-slate-500 mb-10">Last updated: September 10, 2026</p>

        <p className="text-slate-400 leading-relaxed mb-12">
          These Terms of Service (&quot;Terms&quot;) are a legal agreement between you and AllotIQ
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your use of the AllotIQ mobile application and
          this website (together, the &quot;Services&quot;). Please also review our{" "}
          <Link href="/privacy" className="text-brand-emerald hover:underline">Privacy Policy</Link>, which explains
          how we handle information when you use the Services. By downloading, installing, or using AllotIQ, you
          agree to be bound by these Terms. If you do not agree, do not use the Services.
        </p>

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

        <Section id="agreement" title="1. Agreement to These Terms">
          <p>
            By creating a profile in AllotIQ, syncing your Florida MMUR registry data, or otherwise using the app,
            you affirm that you have read, understood, and agree to these Terms and our Privacy Policy. We may
            update these Terms from time to time as described in Section 14 — continued use of the Services after an
            update means you accept the revised Terms.
          </p>
          <p>
            You agree that accepting these Terms electronically — including simply by using the app — has the same
            legal effect as a handwritten signature, and satisfies any legal requirement that an agreement be in
            writing or signed.
          </p>
        </Section>

        <Section id="eligibility" title="2. Who Can Use AllotIQ">
          <p>
            AllotIQ is built for individuals who are at least 18 years old and are qualified patients or designated
            caregivers under the Florida Medical Marijuana Use Act (Fla. Stat. §381.986) and Florida Administrative
            Code Rule 64-4.224. The app&apos;s calculations are specific to Florida&apos;s regulatory allotment rules
            and are not designed for use in any other state or jurisdiction. By using AllotIQ you represent that you
            meet these requirements.
          </p>
        </Section>

        <Section id="description" title="3. What AllotIQ Is — and Isn't">
          <p>
            AllotIQ is a math-based regulatory tracking tool. It helps you follow your own dispensable allotment
            under Florida Administrative Code Rule 64-4.224 — smokable flower and each non-smoking route sharing the
            statewide 70-day aggregate pool — using purchase records you enter manually, scan, or sync from the
            official Florida MMUR registry.
          </p>
          <p><strong className="text-slate-200">AllotIQ is not:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>A source of medical advice, diagnosis, or treatment. It does not replace your physician.</li>
            <li>An FDA-cleared medical device, and has not been reviewed by the U.S. Food &amp; Drug Administration.</li>
            <li>
              Affiliated with, endorsed by, or operated by the Florida Department of Health, the Office of Medical
              Marijuana Use (OMMU), or the State of Florida.
            </li>
            <li>A dispensary, and does not sell, deliver, or broker any cannabis product.</li>
            <li>
              The system of record for your allotment. The State of Florida&apos;s MMUR registry is authoritative;
              AllotIQ&apos;s calculations are estimates based on your own records and are provided for convenience
              only. Always confirm your balance with your dispensary or the MMUR registry before making a purchase.
            </li>
          </ul>
        </Section>

        <Section id="data" title="4. Your Data">
          <p>
            AllotIQ stores your patient profile, purchase history, and MMUR credentials in an encrypted database on
            your own device — we do not operate a server that holds this information. Details on what the app
            collects, how it is used, and your rights over it are in our{" "}
            <Link href="/privacy" className="text-brand-emerald hover:underline">Privacy Policy</Link>, which is
            incorporated into these Terms by reference. Because your data lives on your device, you are responsible
            for keeping your device secure and for any backups you choose to create.
          </p>
        </Section>

        <Section id="mmur" title="5. MMUR Registry Sync">
          <p>
            If you choose to sync your MMUR registry data, AllotIQ connects your device directly to the State of
            Florida&apos;s official MMUR portal using credentials you provide. That connection is between your device
            and the State&apos;s portal — we do not receive, store, or have visibility into your MMUR password. You
            are responsible for keeping your MMUR credentials confidential and for complying with the State&apos;s own
            terms of use for that portal.
          </p>
        </Section>

        <Section id="license" title="6. License and Acceptable Use">
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to
            download and use AllotIQ on a device you own or control, for your own personal, non-commercial use as a
            qualified patient or caregiver. You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Reverse engineer, decompile, or disassemble the app, except where applicable law permits it.</li>
            <li>Copy, modify, or create derivative works of the app or its content.</li>
            <li>Use the app for any unlawful purpose, or to facilitate the unlawful sale, distribution, or diversion of cannabis.</li>
            <li>Interfere with, disrupt, or attempt to gain unauthorized access to the app or the MMUR registry through it.</li>
            <li>Remove or obscure any proprietary notices in the app.</li>
          </ul>
        </Section>

        <Section id="ip" title="7. Intellectual Property">
          <p>
            AllotIQ, its logo, and its underlying software are owned by us and are protected by copyright, trademark,
            and other intellectual property laws. These Terms do not transfer any ownership rights to you — you
            receive only the limited license described in Section 6.
          </p>
        </Section>

        <Section id="thirdparty" title="8. Third-Party Services">
          <p>
            The app is distributed through the Apple App Store and Google Play Store, and each store&apos;s own terms
            also apply to your download and use of the app. AllotIQ may reference or link to third-party services —
            such as dispensary websites, product lab results (Certificates of Analysis), or the MMUR registry itself
            — that we do not control and are not responsible for. Your use of those third-party services is governed
            by their own terms and privacy policies.
          </p>
          <p>
            <strong className="text-slate-200">If you downloaded AllotIQ from the Apple App Store,</strong> this
            agreement is between you and us only, not Apple, and Apple is not responsible for the app or its
            content. The license in Section 6 is limited to a non-transferable license to use the app on an
            Apple-branded device you own or control, as permitted by the App Store&apos;s usage rules. We, not
            Apple, are solely responsible for providing any maintenance and support for the app and for addressing
            any claims relating to it (product liability, legal or regulatory requirements, and consumer protection
            claims included) and any claim that the app infringes a third party&apos;s intellectual property. If the
            app fails to conform to any warranty, you may notify Apple, and Apple will refund the purchase price (if
            any) to you — to the maximum extent permitted by law, that is Apple&apos;s sole warranty obligation. You
            represent that you are not located in a country subject to a U.S. government embargo or on any U.S.
            government list of restricted parties. Apple and its subsidiaries are third-party beneficiaries of this
            section and may enforce it against you.
          </p>
        </Section>

        <Section id="disclaimer" title="9. Disclaimer of Warranties">
          <p>
            THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTIES OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
            NON-INFRINGEMENT. We do not warrant that the app&apos;s allotment calculations will be error-free, that
            they will exactly match the State&apos;s own MMUR records at every moment, or that the app will be
            uninterrupted or available at all times. You are solely responsible for verifying your allotment balance
            with your dispensary or the MMUR registry before relying on it to make a purchase.
          </p>
        </Section>

        <Section id="liability" title="10. Limitation of Liability">
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, ARISING OUT OF OR RELATED TO YOUR USE OF THE
            SERVICES — INCLUDING ANY DISPENSARY PURCHASE MADE IN RELIANCE ON THE APP&apos;S CALCULATIONS — EVEN IF WE
            HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF
            THESE TERMS WILL NOT EXCEED THE AMOUNT YOU PAID US, IF ANY, IN THE TWELVE MONTHS BEFORE THE CLAIM AROSE.
            Some jurisdictions do not allow certain limitations, so some of the above may not apply to you.
          </p>
        </Section>

        <Section id="indemnification" title="11. Indemnification">
          <p>
            You agree to indemnify and hold us harmless from any claims, damages, or expenses (including reasonable
            attorneys&apos; fees) arising out of your violation of these Terms or your misuse of the Services.
          </p>
        </Section>

        <Section id="termination" title="12. Termination">
          <p>
            You may stop using AllotIQ at any time by deleting the app from your device, which also removes your
            locally stored data. We may suspend or terminate your access to the Services if you violate these Terms.
            Sections that by their nature should survive termination — including Sections 7, 8, 9, 10, 11, and 13 —
            will survive.
          </p>
        </Section>

        <Section id="law" title="13. Governing Law">
          <p>
            These Terms are governed by the laws of the State of Florida, without regard to its conflict-of-laws
            principles. Any dispute arising out of these Terms or the Services will be subject to the exclusive
            jurisdiction of the state and federal courts located in Florida.
          </p>
        </Section>

        <Section id="changes" title="14. Changes to These Terms">
          <p>
            We may update these Terms from time to time. The updated version will be indicated by a revised
            &quot;Last updated&quot; date at the top of this page, and material changes may also be noted in the
            app&apos;s release notes. Continuing to use AllotIQ after changes take effect constitutes acceptance of
            the revised Terms.
          </p>
        </Section>

        <Section id="contact" title="15. Contact Us">
          <p>
            If you have questions about these Terms, contact us by email at{" "}
            <a href="mailto:privacy@allotiq.com" className="text-brand-emerald hover:underline">privacy@allotiq.com</a>,
            {" "}or by post at:
          </p>
          <p className="text-slate-300">
            AllotIQ<br />
            1021 Rosetree Ln<br />
            Tarpon Springs, FL 34689-2854<br />
            United States
          </p>
          <p>
            <strong className="text-slate-200">California residents:</strong> if a complaint with us is not
            satisfactorily resolved, you may contact the Complaint Assistance Unit of the Division of Consumer
            Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N
            112, Sacramento, California 95834, or by phone at (800) 952-5210 or (916) 445-1254.
          </p>
        </Section>
      </div>

      <footer className="border-t border-white/5 py-12 px-6 text-center text-slate-500">
        <p>Made for Florida Patients (Rule 64-4.224)</p>
      </footer>
    </main>
  );
}
