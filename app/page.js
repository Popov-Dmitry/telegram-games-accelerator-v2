import Image from "next/image";
import styles from "./page.module.css";
import IconLink from "@/components/icon-link/IconLink";
import Button from "@/components/button/Button";
import { joinClassNames } from "@/utils/join-class-names";

export default function Home() {
  return (
    <main>
      <div className={joinClassNames(styles.container, styles.header)}>
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
        <div className={joinClassNames(styles.block, styles.pb125, styles.heroBackground)}>
          <div className={joinClassNames(styles.container, styles.flexCol, styles.gap12)}>
            <div className={styles.centeredFlex}>
              <div className={styles.centeredFlex}>
                <Image src="/notcoin-logo.svg" alt="" width={28} height={28} />
                <div className={styles.notcoin}>Notcoin</div>
              </div>
              <Image src="/helika-logo.svg" alt="" width={117} height={24} />
            </div>
            <div className={styles.centeredFlex}>
              <div className={styles.caption}>In Partnership with</div>
              <Image src="/ton-ventures.png" alt="" width={187} height={28} />
            </div>
          </div>
          <div className={joinClassNames(styles.container, styles.centeredFlex, styles.gap12, styles.mt74)}>
            <Image src="/logo.svg" alt="" width={100} height={78} />
            <div>
              <div className={styles.telegramGaming}>Telegram Gaming</div>
              <div className={styles.accelerator}>ACCELERATOR</div>
            </div>
          </div>
          <div className={joinClassNames(styles.container, styles.flexCol, styles.gap24, styles.mt90)}>
            <div className={joinClassNames(styles.caption, styles.textGreen)}>Lead the next wave of Telegram games</div>
            <Button
              text="Apply"
              href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
              newTab
              className={styles.mt20}
            />
          </div>
        </div>
        <div className={joinClassNames(styles.block, styles.pixelBackground, styles.mt110)}>
          <div className={joinClassNames(styles.container, styles.grid3, styles.colGap48, styles.centeredGridBlock)}>
            <div>
              <Image src="/telegram.svg" alt="" width={36} height={36} />
              <div className={styles.caption}>
                Help you scale your<br />
                unique game<br />
                to Telegram’s massive<br />
                audiences
              </div>
            </div>
            <div>
              <Image src="/gear-outline.svg" alt="" width={36} height={36} />
              <div className={styles.caption}>
                Technical and<br />
                analytical expertise
              </div>
            </div>
            <div>
              <Image src="/megaphone.svg" alt="" width={36} height={36} />
              <div className={styles.caption}>
                Providing go-to-market<br />
                strategy, user<br />
                acquisition solutions
              </div>
            </div>
          </div>
          <div className={joinClassNames(styles.container, styles.blueBox, styles.mt240)}>
            <div className={styles.mx54}>
              <div className={joinClassNames(styles.title, styles.textCenter)}>Innovate tools</div>
              <div className={joinClassNames(styles.grid3, styles.gridBlock56, styles.mt74)}>
                <div>
                  <div className={styles.subtitle}>Community</div>
                  <div className={joinClassNames(styles.text, styles.mt18)}>
                    Telegram native toolset for easy
                    access to a 900M active audience.
                    500+ user-acquisition campaigns.
                  </div>
                </div>
                <div>
                  <div className={styles.subtitle}>Tonstarter</div>
                  <div className={joinClassNames(styles.text, styles.mt18)}>
                    The launchpad platform designed to support projects on The Open Network (TON)
                  </div>
                </div>
                <div />
                <div>
                  <div className={styles.subtitle}>Early</div>
                  <div className={joinClassNames(styles.text, styles.mt18)}>
                    A tool for win-win collaborations between projects and their early adopters
                  </div>
                  <div className={styles.bgIcon2}>
                    <Image src="./icon2.svg" alt="" fill />
                  </div>
                </div>
                <div>
                  <div className={styles.subtitle}>TokenTable</div>
                  <div className={joinClassNames(styles.text, styles.mt18)}>
                    An on-chain token management platform that allows to conduct token sales, airdrops, vesting and
                    unlocking
                  </div>
                </div>
                <div />
              </div>
            </div>
            <div className={joinClassNames(styles.divider, styles.mt90)} />
            <div className={styles.mx54}>
              <div className={joinClassNames(styles.mt90, styles.subtitle)}>Helika</div>
              <div className={joinClassNames(styles.grid3, styles.gridBlock37, styles.mt20)}>
                <div>
                  <div className={styles.textSemibold}>Game Management</div>
                  <div className={styles.text}>
                    In-game analytics, LiveOps, A/B Testing, and Discord Support Portal
                  </div>
                </div>
                <div>
                  <div className={styles.textSemibold}>
                    Marketing & Growth Analytics
                  </div>
                  <div className={styles.text}>
                    Everything you need to grow your game, including Deep Funnel
                  </div>
                </div>
                <div />
                <div>
                  <div className={styles.textSemibold}>On-Chain Analytics</div>
                  <div className={styles.text}>
                    Track everything on-chain, including your on-chain token and NFT
                  </div>
                </div>
                <div>
                  <div className={styles.textSemibold}>AI Optimize Engine</div>
                  <div className={styles.text}>
                    Programmatically optimize your game
                  </div>
                </div>
                <div />
              </div>
            </div>
            <Image className={styles.pixels1} src="/pixels1.png" alt="" width={414} height={546} />
          </div>
          <Button
            text="Apply"
            href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
            newTab
            className={styles.mt66}
          />
        </div>
        <div className={joinClassNames(styles.block, styles.heroBackground, styles.pb255)}>
          <Image className={styles.plane} src="/logo.svg" alt="" width={502} height={358} />
          <div className={styles.container}>
            <div className={joinClassNames(styles.title, styles.textGreen, styles.textCenter, styles.mt230)}>
              What can you expect?
            </div>
            <div
              className={joinClassNames(
                styles.grid3,
                styles.rowGap64,
                styles.mt90
              )}
            >
              <div className={styles.subtitle}>Funding Support</div>
              <div className={styles.text}>
                <div className={styles.textBold}>TON Ventures and TON Foundation</div>
                <div className={styles.text}>
                  Each team accepted into the Accelerator is guaranteed to pitch to TON Ventures. TON Foundation will be
                  hosting Q&A sessions for our teams.
                </div>
              </div>
              <div />
            </div>
            <div className={joinClassNames(styles.divider, styles.mt70)} />
            <div
              className={joinClassNames(
                styles.grid3,
                styles.rowGap64,
                styles.mt90
              )}
            >
              <div className={styles.subtitle}>Go-to-Market</div>
              <div className={styles.gridBlock64}>
                <div>
                  <div className={styles.textBold}>User Acquisition Support</div>
                  <div className={styles.text}>
                    10K attracted users to the approved game for the test period
                  </div>
                </div>
                <div>
                  <div className={styles.textBold}>Notcoin Explore Campaigns</div>
                  <div className={styles.text}>
                    Accelerate user adoption through engagement tools with over 40 million users
                  </div>
                </div>
                <div>
                  <div className={styles.textBold}>Community of Key Opinion Leaders</div>
                  <div className={styles.text}>
                    To promote projects within the TON ecosystem
                  </div>
                </div>
              </div>
              <div className={styles.gridBlock64}>
                <div>
                  <div className={styles.textBold}>Early Incubation</div>
                  <div className={styles.text}>
                    Engage with early adapters for product testing, feedback, and growth
                  </div>
                </div>
                <div>
                  <div className={styles.textBold}>Priority Launch on Community Platform</div>
                  <div className={styles.text}>
                    Receive access to a premier launch platform in the TON ecosystem
                  </div>
                </div>
                <div>
                  <div className={styles.textBold}>Gaming and Blockchain</div>
                  <div className={styles.text}>
                    Connections:Access to Notcoin and Helika partners and influencer networks
                  </div>
                </div>
              </div>
            </div>
            <div className={joinClassNames(styles.divider, styles.mt83)} />
            <div
              className={joinClassNames(
                styles.grid3,
                styles.rowGap64,
                styles.mt122
              )}
            >
              <div className={styles.subtitle}>
                Technical &<br />
                Analytical<br />
                Support
              </div>
              <div className={styles.gridBlock64}>
                <div>
                  <div className={styles.textBold}>Advanced Analytics</div>
                  <div className={styles.text}>
                    Use an AI-powered suite of products for game studios to improve player engagement, retention, and monetization
                  </div>
                </div>
                <div>
                  <div className={styles.textBold}>Workshops</div>
                  <div className={styles.text}>
                    Join specialized workshops including LiveOps, Growth, and Analytics
                  </div>
                </div>
              </div>
              <div className={styles.gridBlock64}>
                <div>
                  <div className={styles.textBold}>
                    6 Months of Full Access to Helika Solution Suite
                  </div>
                  <div className={styles.text}>
                    Including Helika Game Management, Product Analytics, and UA Tooling
                  </div>
                </div>
                <div>
                  <div className={styles.textBold}>Advanced Technical Support</div>
                  <div className={styles.text}>
                    Use our expertise and mentorship to help your game leverage the TON blockchain’s capabilities
                  </div>
                </div>
              </div>
            </div>
            <Button
              text="Apply"
              href="https://airtable.com/appXnUdjNS7Fzxpq7/pagWSQDZwdqEVDv01/form"
              newTab
              className={joinClassNames(styles.mt144, styles.mxAuto)}
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
