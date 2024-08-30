import Image from "next/image";
import styles from "./page.module.css";
import IconLink from "@/components/icon-link/IconLink";
import Button from "@/components/button/Button";
import { joinClassNames } from "@/utils/join-class-names";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <div className={joinClassNames(styles.centeredFlex, styles.gap10)}>
          <Image src="/logo.svg" alt="" width={28} height={23} />
          <div className={styles.headerText}>Telegram Gaming</div>
        </div>
        <div className={joinClassNames(styles.centeredFlex, styles.gap32)}>
          <div className={styles.link}>Tools</div>
          <div className={styles.link}>Solutions</div>
          <div className={styles.link}>Partners</div>
        </div>
        <Button
          text="apply"
          size="sm"
          href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.block}>
          <div className={styles.name}>Telegram Gaming Accelerator</div>
          <div className={styles.caption}>
            Lead the next wave of Telegram games
          </div>
          <Button
            text="Apply"
            href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
            newTab
            className={styles.mt20}
          />
          <div className={joinClassNames(styles.grid3, styles.mt74)}>
            <div className={styles.firstGridBlock}>
              Scale your unique game to Telegram’s massive{" "}
              <span className={styles.centeredFlex}>
                audiences
                <Image src="./telegram.svg" alt="" width={20} height={20} />
              </span>
            </div>
            <div className={styles.firstGridBlock}>
              Find a go-to-market strategy & user acquisition{" "}
              <span className={styles.centeredFlex}>
                solution
                <Image src="./megaphone.svg" alt="" width={21} height={21} />
              </span>
            </div>
            <div className={styles.firstGridBlock}>
              Get advanced technical support & analytical{" "}
              <span className={styles.centeredFlex}>
                expertise
                <Image src="./gear-outline.svg" alt="" width={24} height={24} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.title}>Innovate tools</div>
          <div
            className={joinClassNames(
              styles.grid2,
              styles.rowGap64,
              styles.mt38
            )}
          >
            <div className={styles.gridBlock18}>
              <div className={styles.subtitle}>Community</div>
              <div className={styles.text}>
                Telegram native toolset for easy access to a 900M active
                audience.
                <br />
                500+ user-acquisition campaigns.
              </div>
              <div className={styles.bgIcon1}>
                <Image src="./icon1.svg" alt="" fill />
              </div>
            </div>
            <div className={styles.gridBlock18}>
              <div className={styles.subtitle}>Early</div>
              <div className={styles.text}>
                A tool for win-win collaborations between projects and their
                early adopters
              </div>
              <div className={styles.bgIcon2}>
                <Image src="./icon2.svg" alt="" fill />
              </div>
            </div>
            <div className={styles.gridBlock18}>
              <div className={styles.subtitle}>Tonstarter</div>
              <div className={styles.text}>
                The launchpad platform designed to support projects on The Open
                Network (TON)
              </div>
              <div className={styles.bgIcon3}>
                <Image src="./icon3.svg" alt="" fill />
              </div>
            </div>
            <div className={styles.gridBlock18}>
              <div className={styles.subtitle}>TokenTable</div>
              <div className={styles.text}>
                An on-chain token management platform
                <br />
                that allows to conduct airdrops, vesting
                <br />
                and unlocking
              </div>
              <div className={styles.bgIcon4}>
                <Image src="./icon4.svg" alt="" fill />
              </div>
            </div>
          </div>
          <div
            className={joinClassNames(
              styles.grid2,
              styles.rowGap30,
              styles.mt55,
              styles.relative
            )}
          >
            <div>
              <div className={styles.subtitle}>Helika Solution Suite</div>
            </div>
            <div className={styles.mobileNone} />
            <div className={styles.bgIcon5}>
              <Image src="./icon5.svg" alt="" fill />
            </div>
            <div>
              <div className={styles.textSemibold}>Game Management</div>
              <div className={styles.text}>
                In-game analytics covering users, engagement, retention,
                revenue, segmentation, and more.
              </div>
            </div>
            <div>
              <div className={styles.textSemibold}>
                Marketing & Growth Analytics
              </div>
              <div className={styles.text}>
                Grow your game by leveraging Helika{"'"}s campaing analytics and
                Deep Funnel Attribution.
              </div>
            </div>
            <div>
              <div className={styles.textSemibold}>On-Chain Analytics</div>
              <div className={styles.text}>
                Gain a comprehensive understanding of NFTs and tokens with
                insights about your holders, trading behavior, wallet analysis
                and trends.
              </div>
            </div>
            <div>
              <div className={styles.textSemibold}>Engage</div>
              <div className={styles.text}>
                Launch and customize Play-to-Airdrop campaigns, quests, and
                referral systems.
              </div>
            </div>
          </div>
          <Button
            text="Apply"
            href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
            newTab
            className={styles.mt50}
          />
        </div>
        <div className={styles.block}>
          <div className={styles.title}>What can you expect?</div>
          <div
            className={joinClassNames(
              styles.grid3,
              styles.rowGap50,
              styles.mt58
            )}
          >
            <div className={styles.subtitleGreen}>Funding Support</div>
            <div className={joinClassNames(styles.gridLargeBlock, styles.text)}>
              Funding and Investment: Receive access to Notcoin and Helika{" "}
              <span className={styles.textSemibold}>networks of VCs</span> who
              trust us with deal flows
            </div>
            <div className={styles.subtitleGreen}>Go-to-Market</div>
            <div className={joinClassNames(styles.gridBlock25, styles.text)}>
              <div>
                User Acquisition Support:
                <br />
                <span className={styles.textSemibold}>
                  50K attracted users
                </span>{" "}
                to the approved game for the test period
              </div>
              <div>
                Priority Launch on Community platform: Receive access to a{" "}
                <span className={styles.textSemibold}>
                  premier launch platform
                </span>{" "}
                in the TON ecosystem
              </div>
              <div>
                Notcoin Explore Campaigns: Accelerate user adoption through
                engagement tools{" "}
                <span className={styles.textSemibold}>
                  with over 40 million users
                </span>
              </div>
            </div>
            <div className={joinClassNames(styles.gridBlock25, styles.text)}>
              <div>
                Early Incubation:
                <br />
                <span className={styles.textSemibold}>
                  Engage with early adapters
                </span>{" "}
                for product testing, feedback, and growth
              </div>
              <div>
                Community
                <br />
                of{" "}
                <span className={styles.textSemibold}>
                  Key Opinion Leaders
                </span>{" "}
                to promote projects within the TON ecosystem
              </div>
              <div>
                Gaming and Blockchain Connections: Access to Notcoin and Helika{" "}
                <span className={styles.textSemibold}>
                  partners and influencer networks
                </span>
              </div>
            </div>
            <div className={styles.subtitleGreen}>
              Technical & Analytical Support
            </div>
            <div className={joinClassNames(styles.gridBlock25, styles.text)}>
              <div>
                Advanced Analytics:
                <br />
                Use an{" "}
                <span className={styles.textSemibold}>AI-powered suite</span> of
                products for game studios to improve player engagement,
                retention, and monetization
              </div>
            </div>
            <div className={joinClassNames(styles.gridBlock25, styles.text)}>
              <div>
                Advanced Technical Support: Use our expertise and mentorship to
                help your game leverage the TON blockchain’s capabilities
              </div>
            </div>
            <div className={styles.subtitleGreen}>
              Regulatory and Legal Assistance
            </div>
            <div className={styles.text}>
              Access to sources for assistance with intellectual property,
              contracts, and other legal matters
            </div>
            <Button
              text="Apply"
              href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
              newTab
              className={styles.mAuto}
            />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.title}>Who we are looking for?</div>
          <div className={joinClassNames(styles.grid3, styles.mt50)}>
            <div className={styles.gridBlock25}>
              <Image src="./fire.svg" alt="" width={63} height={63} />
              <div>
                <div className={styles.subtitle}>Web3 Games</div>
                <div className={joinClassNames(styles.text, styles.mt10)}>
                  Highly intelligent Web3 gaming projects building on TON and
                  accelerating the Telegram mini apps ecosystem
                </div>
              </div>
            </div>
            <div className={styles.gridBlock25}>
              <Image src="./stars.svg" alt="" width={63} height={63} />
              <div>
                <div className={styles.subtitle}>Initial Traction</div>
                <div className={joinClassNames(styles.text, styles.mt10)}>
                  Games with initial traction and planned TGE would be preferred
                </div>
              </div>
            </div>
            <div className={styles.gridBlock25}>
              <Image src="./calendar.svg" alt="" width={60} height={60} />
              <div>
                <div className={styles.subtitle}>TGE: Q4 2024</div>
                <div className={joinClassNames(styles.text, styles.mt10)}>
                  TGE – Q4 2024; cliff by the end of 2024; vesting for TGA
                  founders maximum 6 months
                </div>
              </div>
            </div>
          </div>
          <Button
            text="Apply"
            href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
            newTab
            className={styles.mt38}
          />
        </div>
        <div className={styles.block}>
          <div className={styles.title}>Initial partners</div>
          <div
            className={joinClassNames(
              styles.grid2,
              styles.colGap100,
              styles.mt58
            )}
          >
            <div
              className={joinClassNames(
                styles.subtitle,
                styles.mobileTextCenter
              )}
            >
              <Image src="./ton-icon.svg" alt="" width={147} height={134} />
              <div>
                <div
                  className={joinClassNames(
                    styles.subtitle,
                    styles.mobileTextCenter
                  )}
                >
                  Notcoin
                </div>
                <div
                  className={joinClassNames(
                    styles.text,
                    styles.mobileTextCenter,
                    styles.mt10
                  )}
                >
                  <span
                    className={joinClassNames(
                      styles.textGreen,
                      styles.textBold
                    )}
                  >
                    40M+
                  </span>{" "}
                  users,{" "}
                  <span
                    className={joinClassNames(
                      styles.textGreen,
                      styles.textBold
                    )}
                  >
                    10M+
                  </span>{" "}
                  holders, extensive experience in launching over
                  <span
                    className={joinClassNames(
                      styles.textGreen,
                      styles.textBold
                    )}
                  >
                    {" "}
                    150 campaigns
                  </span>{" "}
                  on TON
                </div>
              </div>
            </div>
            <div
              className={joinClassNames(
                styles.subtitle,
                styles.mobileTextCenter
              )}
            >
              <Image src="./helika-icon.svg" alt="" width={147} height={134} />
              <div>
                <div
                  className={joinClassNames(
                    styles.subtitle,
                    styles.mobileTextCenter
                  )}
                >
                  Helika
                </div>
                <div
                  className={joinClassNames(
                    styles.text,
                    styles.mobileTextCenter,
                    styles.mt10
                  )}
                >
                  <span
                    className={joinClassNames(
                      styles.textGreen,
                      styles.textBold
                    )}
                  >
                    15+
                  </span>{" "}
                  Years in Web3,
                  <span
                    className={joinClassNames(
                      styles.textGreen,
                      styles.textBold
                    )}
                  >
                    {" "}
                    25
                  </span>
                  + Years in Gaming,{" "}
                  <span
                    className={joinClassNames(
                      styles.textGreen,
                      styles.textBold
                    )}
                  >
                    10+
                  </span>{" "}
                  Years in Venture Funding,{" "}
                  <span
                    className={joinClassNames(
                      styles.textGreen,
                      styles.textBold
                    )}
                  >
                    250+
                  </span>{" "}
                  Global Industry Connections
                </div>
              </div>
            </div>
          </div>
          <Button
            text="Apply"
            href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
            newTab
            className={styles.mt50}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerCaption}>
          Lead the next wave
          <br /> of Telegram games
        </div>
        <div className={styles.footerCenter}>
          <IconLink
            text="Apply"
            size="lg"
            href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
            icon="./arrow.svg"
          />
        </div>
      </div>
    </main>
  );
}
