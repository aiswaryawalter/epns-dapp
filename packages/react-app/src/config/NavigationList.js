import { themeLight, themeDark } from "config/Themization";
import GLOBALS from "config/Globals";

const NavigationList = {
    primary: {
      communicate: {
        src: "svg/communicate.svg",
        iconFactory: null,
        name: 'Communicate',
        title: 'Communicate Tab',
        alt: 'Communicate Tab Icon',
        href: null,
        newTab: false,
        isRoute: true,
        hasMenuLogic: true,
        opened: true,
  
        drilldown: {
          inbox: {
            src: "svg/feedbox.svg",
            iconFactory: null,
            name: 'Inbox',
            title: 'Inbox',
            alt: 'Open Inbox',
            href: '/inbox',
            newTab: false,
            isRoute: true,
            hasMenuLogic: true,
            headerTag: {
              title: 'Inbox',
              light: {
                bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },
          spam: {
            src: "svg/spam.svg",
            iconFactory: null,
            name: 'Spam',
            title: 'Spam',
            alt: 'Open Spam',
            href: '/spam',
            newTab: false,
            isRoute: true,
            hasMenuLogic: true,
            headerTag: {
              title: 'Spam',
              light: {
                bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },  
          channels: {
            src: "svg/channel.svg",
            iconFactory: null,
            name: 'Channels',
            title: 'Browse Channels',
            alt: 'Open Channels',
            href: '/channels',
            newTab: false,
            isRoute: true,
            hasMenuLogic: true,
            headerTag: {
              title: 'View Channels',
              light: {
                bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },
          receiveNotifs: {
            src: "svg/share.svg",
            iconFactory: null,
            name: 'Receive Notifs',
            title: 'Receive Notifs',
            alt: 'Receive Notifs',
            href: '/receive',
            newTab: false,
            isRoute: true,
            hasMenuLogic: true,
            headerTag: {
              title: 'Receive Notifications',
              light: {
                bg: GLOBALS.COLORS.GRADIENT_THIRD,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },
        }
      },
      developer: {
        src: "svg/developer.svg",
        iconFactory: null,
        name: 'Developer',
        title: 'Check Developer Tab',
        alt: 'Developer Tab Icon',
        href: null,
        newTab: false,
        opened: false,
        isRoute: true,
        hasMenuLogic: true,
  
        drilldown: {
          createChannel: {
            uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.CREATE_CHANNEL,
            src: "svg/channeladmin.svg",
            iconFactory: null,
            name: 'Create Channel',
            title: 'Create Channel',
            alt: 'Create Channels / Dashboard',
            href: '/dashboard',
            newTab: false,
            isRoute: true,
            hasMenuLogic: true,
            headerTag: {
              title: 'Channel Dashboard',
              light: {
                bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },
          createTestChannel: {
            uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.CREATE_TEST_CHANNEL,
            src: "svg/news.svg",
            iconFactory: null,
            name: 'Create Test Channel',
            title: 'Go To Staging Environment To Create a Test Channel',
            alt: 'Create A Test Channel',
            href: 'https://staging-app.epns.io/#/dashboard',
            newTab: false,
            isRoute: false,
            hasMenuLogic: true,
            headerTag: {
              title: 'Create A Test Channel',
              light: {
                bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },
          developerGuide: {
            uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.DEVELOPER_GUIDE,
            src: "svg/tutorial.svg",
            iconFactory: null,
            name: "Developer's Guide",
            title: "Developer's Guide",
            alt: "Developer's Guide",
            href: 'https://docs.epns.io/',
            newTab: false,
            isRoute: false,
            hasMenuLogic: true,
            headerTag: {
              title: "Developer's Guide",
              light: {
                bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },
        },
      },
      govern: {
        src: "svg/govern.svg",
        iconFactory: null,
        name: 'Govern',
        title: 'Governance Tab',
        alt: 'Governance Tab Icon', 
        href: null,
        newTab: false,
        opened: false,
        isRoute: true,
        hasMenuLogic: true,
  
        drilldown: {
          governance: {
            uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.GOVERNANCE,
            src: "svg/channeladmin.svg",
            iconFactory: null,
            name: 'Governance DAPP',
            title: 'Governance DAPP',
            alt: 'Governance DAPP',
            href: '/govern',
            newTab: false,
            isRoute: true,
            hasMenuLogic: true,
            headerTag: {
              title: 'Governance DAPP',
              light: {
                bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },
          governanceGuide: {
            uid: GLOBALS.CONSTANTS.NAVBAR_IDENTIFIERS.GOVERNANCE_GUIDE,
            src: "svg/tutorial.svg",
            iconFactory: null,
            name: "Governance Guide",
            title: "Governance Guide",
            alt: "Governance Guide",
            href: ' https://docs.epns.io/epns-governance/governance-guide',
            newTab: false,
            isRoute: false,
            hasMenuLogic: true,
            headerTag: {
              title: "Governance Guide",
              light: {
                bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },
        },
      },
      incentives: {
        src: "svg/incentive.svg",
        iconFactory: null,
        name: 'Incentives',
        title: 'Check Incentives Tab',
        alt: 'Incentives Tab Icon',
        href: null,
        newTab: false,
        opened: false,
        isRoute: true,
        hasMenuLogic: true,
  
        drilldown: {
          yield: {
            src: "svg/yield.svg",
            iconFactory: null,
            name: 'Yield Farming',
            title: 'Yield Farming',
            alt: 'Open Yield Farming',
            href: '/yield',
            newTab: false,
            isRoute: true,  
            hasMenuLogic: true,
            headerTag: {
              title: "Yield Farming",
              light: {
                bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },
          rockstars: {
            src: "svg/rockstars.svg",
            iconFactory: null,
            name: 'Rockstars of EPNS',
            title: 'Check Rockstars of EPNS',
            alt: 'Open Inbox',
            href: '/rockstar',
            newTab: false,
            isRoute: true,
            hasMenuLogic: true,
            headerTag: {
              title: "Rockstars NFTs",
              light: {
                bg: GLOBALS.COLORS.GRADIENT_SECONDARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },
          airdrop: {
            src: "svg/gratitude.svg",
            iconFactory: null,
            name: 'Gratitude Drop',
            title: 'Check Gratitude Drop',
            alt: 'Open Gratitude Drop',
            href: '/gratitude',
            newTab: false,
            isRoute: true,
            hasMenuLogic: true,
            headerTag: {
              title: "Gratitude Drop",
              light: {
                bg: GLOBALS.COLORS.GRADIENT_THIRD,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          },      
        }
      },
      walkthrough: {
        src: "svg/walkthrough.svg",
        iconFactory: null,
        name: 'Walkthrough',
        title: 'Check Walkthrough Tab',
        alt: 'Walkthrough Tab Icon',
        href: null,
        newTab: false,
        opened: false,
        isRoute: true,
        hasMenuLogic: true,
  
        drilldown: {
          // tutorial: {
          //   src: "svg/tutorial.svg",
          //   iconFactory: null,
          //   name: 'Tutorial',
          //   title: 'Tutorial',
          //   alt: 'Open Tutorial',
          //   href: '/tutorial',
          //   newTab: false,
          //   isRoute: true,  
          //   hasMenuLogic: true,
          // },
          faq: {
            src: "svg/qna.svg",
            iconFactory: null,
            name: 'FAQs',
            title: 'Checkout Frequently Asked Questions',
            alt: 'Open FAQs',
            href: '/faq',
            newTab: false,
            isRoute: true,
            hasMenuLogic: true,
            headerTag: {
              title: "FAQ",
              light: {
                bg: GLOBALS.COLORS.GRADIENT_PRIMARY,
                fg: themeLight.headerTagFg,
              },
              dark: {
                bg: themeDark.headerTagBg,
                fg: themeDark.headerTagFg,
              }
            }
          }, 
        }
        
      }
    },
    secondary: {
      latest: {
        src: "svg/news.svg",
        iconFactory: null,
        name: 'Latest',
        title: 'Checkout latest news',
        alt: "Open What's Latest",
        // href: 'https://staging-dapp.epns.io',
        id:"olvy-target",
        newTab: false,
        opened: false,
        isRoute: true,
        isMenuLogic: false,
      },
      support: {
        src: "svg/support.svg",
        iconFactory: null,
        name: 'Support',
        title: 'Open a support ticket',
        alt: 'Open Support Ticket',
        href: '/support',
        newTab: false,
        opened: false,
        isRoute: true,
        isMenuLogic: false,
      },
    },
  }
  
  export default NavigationList;
  