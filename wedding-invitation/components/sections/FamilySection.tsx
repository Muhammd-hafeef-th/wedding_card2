"use client";
// components/sections/FamilySection.tsx
import { motion } from "framer-motion";
import { WeddingData } from "@/types";
import { VintageFlourish } from "@/components/ui/BotanicalOrnaments";

interface FamilySectionProps {
  wedding: WeddingData;
}

export default function FamilySection({ wedding }: FamilySectionProps) {
  const formatParents = (father?: string, mother?: string, defaultText = "") => {
    if (!father && !mother) return defaultText;
    if (father && mother) {
      return `${father.trim()} & ${mother.trim()}`;
    }
    return father || mother || "";
  };

  const brideParents = formatParents(
    wedding.brideFatherName,
    wedding.brideMotherName,
    "Alexander & Elena"
  );

  const groomParents = formatParents(
    wedding.groomFatherName,
    wedding.groomMotherName,
    "Sergey & Olga"
  );

  return (
    <section id="families" className="section-padding relative">
      <div className="container-luxury relative z-10 flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="font-script text-4xl sm:text-5xl text-[#F5EFEB] mb-2 leading-tight">
            With the Blessings of Our Families
          </h2>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-[#D7CEBA] opacity-80">
            Our Beloved Parents
          </p>
          <div className="flex justify-center mt-3">
            <VintageFlourish color="#C8BEA8" width={110} />
          </div>
        </div>

        <div className="family-wrapper">
          <div className="family-grid">
            {/* Bride's Family Card */}
            <motion.div
              className="family-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="family-role">Bride&apos;s Family</span>
              <h4 className="family-member-name">
                {wedding.brideFirstName || "Ksenia"}
              </h4>
              <span className="family-relation">Daughter of</span>
              <p className="family-parents">{brideParents}</p>

              {(wedding.bridePaternalGrandparents || wedding.brideMaternalGrandparents) && (
                <div className="family-divider" />
              )}

              {wedding.bridePaternalGrandparents && (
                <>
                  <span className="family-grandparent-label">Paternal Grandparents</span>
                  <p className="family-grandparent-names">
                    {wedding.bridePaternalGrandparents}
                  </p>
                </>
              )}

              {wedding.brideMaternalGrandparents && (
                <>
                  <span className="family-grandparent-label">Maternal Grandparents</span>
                  <p className="family-grandparent-names">
                    {wedding.brideMaternalGrandparents}
                  </p>
                </>
              )}
            </motion.div>

            {/* Groom's Family Card */}
            <motion.div
              className="family-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="family-role">Groom&apos;s Family</span>
              <h4 className="family-member-name">
                {wedding.groomFirstName || "Andrey"}
              </h4>
              <span className="family-relation">Son of</span>
              <p className="family-parents">{groomParents}</p>

              {(wedding.groomPaternalGrandparents || wedding.groomMaternalGrandparents) && (
                <div className="family-divider" />
              )}

              {wedding.groomPaternalGrandparents && (
                <>
                  <span className="family-grandparent-label">Paternal Grandparents</span>
                  <p className="family-grandparent-names">
                    {wedding.groomPaternalGrandparents}
                  </p>
                </>
              )}

              {wedding.groomMaternalGrandparents && (
                <>
                  <span className="family-grandparent-label">Maternal Grandparents</span>
                  <p className="family-grandparent-names">
                    {wedding.groomMaternalGrandparents}
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
