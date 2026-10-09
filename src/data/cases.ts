import { MysteryCase, SleuthProfile } from '../types';

export const CASE_IMAGES = {
  flannanCover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtrTmEAQj_tPZM8OvMI-gNMCooqnWhocMmEKa_yb0R2aPl3GhCvJwEIboec0gRSXBEfLcQY32TPhhD6L5iFMeznGKEyVBFSs6ePub4V9Eo0NhAfV8b3iffuzYoI56WbL9lqERdjqiBnuEcQfs_L2gpWnIVwJ91WxHl2xiVOUXrGzEDmxy6SmFIYSIil0AaJ26vLsB-gwPprVAkqhfp6roZCHLZYOhUfI-2yN7GmlycrjbpuInkPvkP',
  briefingDesk: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY0hA1yeCNSWuTNl3tM-4et9tVH-Qva0bgqFFSOSEepTlMwSAC4WmtGyeUZCNGqn-AUWIxyPsKcYrU7FEsh1E5zNTGrjC97aPk8gEhAwm4wbAecbDyb6p7WZv7gqm77Vkhc6T-nX54L9sV88G_uvHWJfm18qIdg9sWUrSHGg1QhmJ_trDkJ_K3qVu0ekS9WbDAKVvw6MQWLocdEuveqIfecDWhZlhygG_n3SAE4ehZKY7hfoj6diec',
  briefingLoupe: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbQTrAz5fwoDfbb2PGjjholFsbloQehFfbfrG6KoUkRJzZeOYjuC3DmonoEC61kGuSJPtrIu_6XV9DEsgB3GKbVx3KK7lPLnymB7BVjgyq2nkfl4BNUT5Hxptp1iERGCjjyumQncIzYHP3GuQD1lwMzaGoIaDk8fFPR03xCISSC5PSimlzcfTikjZdQt-MCSZMaNIQnXzjIZYCH4NJFnK6HN4EMkIPRmNlFcJSRyq3ojhaGN7VyJkb',
  briefingCorkboard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy1tHd6LxSihwrrkCOGL2oEy8pmUdTaouV5nPbHkiAlVYxq8snXUNFzFX5n5z2RBckp00UNoy1UO1A1z99WTwcVAP4KXyBms3fLhqIzA870YEhFEQp-hcxPglzSSlRenrxhFHWABqlMNVk7cTNyhx_LaW-nP8-imw3YVx6PsJeIhcBK3bbKGHsU1iAFEIzJHurvj_KPFAzkm2A46blXknDER5Hnvw39xkxj1ecC4o0ibP5AJKfaPFv',
  flannanWaves: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSx58GaAUKYSx5uj0tiTIyPWvANaJHveL6BX9oI_nk_AQZMC41YMLboepHpzzbRmbiM_O6oZ0Wq1fgnXp7tvP8_SPOXSP8MJyuPbUgNjTS2Q9cMoo7Aj8Z22jY1J0104Mr1UGrCHdfl-T0Fr5VFGWZRmNZY9P5tqnhUC_USDgcRWOTgkVOUd0696hYdYiUZvZ-5XZrvQWI914R19oKyWSehQu_0toYB-UCpNG7Lc_GCsX7jlbnqyTu',
  somertonScrap: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ2VvVvGnxgnNLii2CbsnVi5UZgvANPo-JHS35yc4sP9SiTqPKtI9MrvlyaPUt8ZeifRFdkOVwORd69f2HwLv6UHetn4ewZ1t71l2G5hDYLMEJAqtmUMYIUmuPElAKIrbdexRYCjgqb1nPEOyxQ_MIJppq4NqI10C0T9BchH9fTowK0UvfHZupjyUWltlZSIIPOV3NPV1dyisvI0k2iYJEwy5hLuw5Wz65bFeI91CYXY6w74LgyL09',
  amberRoom: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQvGipDMCwujsgG3mU_p4SHLB0jHsA8cutAsnW708RNK5BdHIDLXQCriB2SqFxfiGMyFRKRAOucjCUJTmy-w3HSqbupAE4itWwuG_AUtT5z8ZML2HePBt5KdxIZfETUrfy_L9aY0R5qXrBy7PbdquX8-JJtGyE3K5_SYroPn7OC7qaJRMz5TiQXZBWJ_E4Y96AmrtOwlD4P86pJDYigUHxoGBjfsyEgpPMN5mCloDqAhOX45_GZhFI',
  maryCeleste: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHb437mHBnVhFxY_L-z6V33lRkqDDC49AWG6kqtsrt77B_aW4PEmyzTpEgRUKlY_EQanWJvssGBf2ScUFuv5HwAYqEYyUrjxuZxX85Ez6fbY_pCR_G0Ac78-hfnszQrcDnSD2I547YdmfQoIMNR18eSpCy2fn8QRA1CV1wnNYGmEngoksyjkR6LTkYOmCXAMIDg1-dV5ScVRw7EVZJaQ_sIRF0P7oYwhc6m5U6cRB-SfBaz4E4K8x_',
  daguerreotypePlate: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3olhh8kcD0r7p4VOlozQq1pFHKzGv9jplhRJK8WD749pSbIUAWevhro5_FYpItF-rSF0ANH-m-VewtgkT96Z-Iu5fnysPP0BkSvkK38xx-HCqYAccAJFlHUjwJAN2hXaeZuT3tk4UZMrKnz2geDhOgtyg1ahWdU2iH0TT3o-7pndJZpac0X9fJm7uCPVS-URQivZJm-WULkyOsnP3x5TdjVS5HZ92ixeiihg3I4u0i5gjcWEPPKRS',
  logbookMacro: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcuQLpyJmaEkOyWNJ9bkCyWCvWs-rbXinUbAv4C8gPlX9gTRGlNa6ammQKOm2M7Z_Y1T4JU6VGcTor6Tnkkzk5TAugif8zwNXEFDXusvBRC5cg4wSwEQ5oVDgpyO2Yab9r8jP_xP9QV-tj0dmc6BUKGnr3S25XoqYP2HKCHKaqaAek6TJni7tjcbdks6HIw__JM3VpMKipWqVLyGvU87kzjNCpg7a1DzgSf96lt9wIPNGQ48p8cM0C',
  loneOilskin: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHlncwFb2lcdmBQsY3GzVmTS5PB-8FxqUXvSpaz3kFh_aFWnodo8gaZK--0XDilFT0n8BuBQ4o3BPBKRoz05T-zXzJTw72u9U52ur6XZNy4saOqxTUenGPf9f6OYLYQPOaFGg3-Vzbu3-dVR7GXP4ehltyE81J4QKzwivny-Y5E6AMs5gTvycNJ5eX1L5IS2YH1m7hj-xFMptp2jJ8-6bY4qLBLjKeXL4P3-QbKW8hUw7DXTvQn4SJ',
  tornMooring: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDilPw2UdTX4ab45jJTqb1ed9nVPlXOPFRB3H5Yg5G1hYk-flX7mEMcIiyYsj51N5I_XP5jDEMl35AMOyWqGBx-QrGbBtHahMYCUrxXBfz8L0rjkvfgyl1ObokOhO6uitxEO1yAyN8P2chp-3ukI9MQdcNPVacaHpuuX_w8nKorxpyKMOMONxJQY80Sayh8cj0ds8FAoJq7uvJ2ximDcYjFJUsBOpQ7_ygoyVWTfuHo6kpapF7eN08i',
  detectivePortrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA440PVnkUBpKn6tRL16EcQQtRlsviHWKrD0ovL9hhA0qkpSlIXfFJpa-K7Swsw-2r6AOA_oFII2HhtX1eIyJPOyX3qFZuazXPhGf9ciaS03meWzypaXE7z_p_EFlnORtmvYUfuxwIjPTaH_jHgLweumd3Z1PaEKsXIfnT-W2KvAduqyV0wQPOlmJhRPSp2GtQhvP_9fyMV3eq3betI-EWTA_k0MdYhsdG1tIcylzSPT_qipWUjRNqG',
  solvedLighthouse: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkz0gbIa2UH8BCJyaXtaejAp2CU8DWAq_gKncvGJ3EG6xO-YIVuI_WeZNl6FygI7H14kQbUeCW90rQzd3VXD6DVXXb_ifZ-3QCv7Ac-fnd41zDorOwJiFp3yBET3j_IC1VEe3eR1MEcgYuK-PwAwLmJZQ31EsvhoSxuSvsb4p8MOrKBvL0a_KsK6EV-PWFtXLdvlrasejzCCOYj4AMTfB4RQRYON2E8OKZ_8sH5qS-Wuc4V8RPy1aR',
  tunguskaForest: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqXyP825YO-2y5OqUiQ23XPfDFPgnS6f4riFmlg6yDO7nqt9pO6L0xAk07gIGQTrk_jkJqGtqXlky21hKtE4fso2JStSnZbwjT0-4u2QGboH1PxgHF8erakB-sFJD_mirlnF92GdzN9DO3yQh_-bmPWkfYS-Jombt1GcxBWxWslolsoNVK-ZXJN_Q2FpKZwsm8TiNLgh26__JKuKsE3fhEec2Z3lwDrefSlfLdeCdWceoJbyqJTlsY',
  dyatlovTent: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8JokvgFYjtDPiJUFhAr5g42Jn3GrkZ7fg9KjyVXYMD0dGjrSibl6TzKAFIYTg_3pXksXp_zvLs2gG-d4GXJaSpoYFKakcnhYBkS5x29_Zdom2e2hUS_0g2NJO90mdj4WT1bS5FEqFq1d4PdSjqacFLJ1B9ClUwu7TL6JOkaQ5kTXly-S3lxLCdMi4syYsn4QbCjMNNkboBdoRAZvUqNwau4dwYDKml-UiL_bo432Zg3aabppH63rI',
  solutionCrane: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfxic9JdEm-q7aqc6cXO0Ux6wI_zi2hGb0A3y3L-cZr4v6W9D5qpT50CK3yCWbKnnI-pwstQnmUY8e-T_E_awjvxXCkbPFqP-PvQOXUJl1y1wLVk-BFEbVujznUHB_d9OkonjW2QOdwOypg_3vUQklk4g6WHR-ZFEBN35GO5KyIb4maaW8PAw5Wsf-EOPaSRygzymmcRT4tcQZc0Dsv4_h23fE2Lr4Y-Vuh2cBDdof19Ma59LlWfgM'
};

export const FEATURED_CASE: MysteryCase = {
  id: 'flannan-isles',
  code: 'CASE FILE #01',
  itemCode: 'EVIDENCE #892-SCOT',
  title: 'The Vanishing of Eilean Mòr',
  subtitle: 'Scottish Lighthouse Enigma',
  era: 'DECEMBER 1900',
  location: 'Scotland, Outer Hebrides',
  difficulty: 'Beginner',
  estimatedMinutes: 7,
  heroImage: CASE_IMAGES.flannanWaves,
  plateImage: CASE_IMAGES.daguerreotypePlate,
  plateCaption: 'PLATE IV: FLANNAN ISLES LIGHT (OUTER HEBRIDES)',
  category: 'historical',
  quote: '“A meal lay unfinished upon the table, the logbook read ‘God is over all’, but the three keepers were simply gone.”',
  cluesCount: 3,
  cluesFound: 3,
  totalClues: 3,
  intakeReport: {
    title: 'Intake Report • Relief Vessel Hesperus',
    date: 'December 26, 1900',
    leadNarrative: 'On December 26, 1900, the relief vessel Hesperus anchored off the desolate cliffs of Eilean Mòr. No signal flag fluttered; no supply boxes were positioned along the crane hoist.',
    secondaryNarrative: 'Captain Harvie sounded the siren. Silence answered. Breaching the living quarters, Superintendent Muirhead recorded anomalous tranquility: the kitchen hearth sat cold, an untouched half-eaten cold mutton pie rested on the pine table, and the clock casing had ground to a halt at 1:55.',
    criticalAnomaly: 'CRITICAL ANOMALY: In the entrance vestibule, only two sets of heavy oilskin wet-weather garments were absent. The third oilskin remained draped upon its brass peg. Three seasoned keepers departed into hurricane waters, yet one walked unprotected into the freeze.'
  },
  inquiryMission: 'Examine 3 pieces of recovered evidence to deduce what caused the three keepers to vanish into the ocean. Reconstruct the final hours of James Ducat, Thomas Marshall, and Donald MacArthur.',
  clues: [
    {
      id: 'clue-1',
      code: 'ITEM 01-A',
      title: 'Logbook Entry #13',
      subtitle: 'Slate Log',
      date: 'DEC 14, 1900',
      location: 'Slate Log',
      image: CASE_IMAGES.logbookMacro,
      quote: '“Storm, such as I never saw before... MacArthur praying, Ducat weeping.”',
      anomalyTitle: 'ANOMALY',
      anomalyText: 'Keepers were gripped by paranoia or an unseen localized squall.',
      anomalyType: 'anomaly',
      discovered: true
    },
    {
      id: 'clue-2',
      code: 'ITEM 01-B',
      title: 'The Lone Oilskin Coat',
      subtitle: 'Vestibule',
      date: 'DEC 26, 1900',
      location: 'Cloakroom Peg 03',
      image: CASE_IMAGES.loneOilskin,
      quote: 'Two sets of waterproofs were missing from the kitchen pegs, but MacArthur’s coat remained untouched.',
      anomalyTitle: 'CRITICAL',
      anomalyText: 'Why did experienced keeper MacArthur rush into a gale in his shirtsleeves?',
      anomalyType: 'critical',
      discovered: true
    },
    {
      id: 'clue-3',
      code: 'ITEM 01-C',
      title: 'Torn West Mooring',
      subtitle: 'Shoreline',
      date: 'DEC 26, 1900',
      location: 'West Landing Platform',
      image: CASE_IMAGES.tornMooring,
      quote: 'Iron railings bent double, supply crate smashed open, iron crane ripped directly from concrete foundation.',
      anomalyTitle: 'FORCE',
      anomalyText: 'Enormous hydrostatic pressure required to dislodge ironwork at +110ft elevation.',
      anomalyType: 'force',
      discovered: true
    }
  ],
  hypotheses: [
    {
      id: 'rogue-wave',
      title: 'A Freak Rogue Wave Swept the Landing',
      description: 'Two men rushed to secure the crane gear; a freak crest caught them unawares, prompting MacArthur to run down without a coat in a desperate rescue attempt.',
      agreePercentage: 88,
      isHistoricallyAccurate: true,
      verdictLabel: 'VERDICT: CORRECT'
    },
    {
      id: 'hostile-boarding',
      title: 'Hostile Maritime Boarding Party',
      description: 'Foreign naval raiders or illegal smugglers landed in stealth, abducted the garrison to conceal clandestine anchorage operations.',
      agreePercentage: 7,
      isHistoricallyAccurate: false,
      verdictLabel: 'VERDICT: DISPROVEN'
    },
    {
      id: 'mass-madness',
      title: 'Supernatural Delirium / Mass Madness',
      description: 'Isolation psychosis induced auditory hallucinations, driving all three men into the boiling surge in unison.',
      agreePercentage: 5,
      isHistoricallyAccurate: false,
      verdictLabel: 'VERDICT: DISPROVEN'
    }
  ],
  historicalSynthesis: {
    title: 'What Really Happened on Eilean Mòr in 1900',
    subheading: 'Northern Lighthouse Board Official Inquiry Assessment',
    investigator: 'Superintendent Robert Muirhead',
    conclusion: "Superintendent Robert Muirhead's official inquiry concluded that on December 15th, an unprecedented 100-foot rogue wave struck the landing. MacArthur rushed out in shirtsleeves to assist Ducat and Marshall, and all three were swept away into the Atlantic surge.",
    evidenceImage: CASE_IMAGES.solutionCrane,
    evidenceCaption: 'EXHIBIT A: West Landing Damage Assessment',
    archiveRef: 'ARCHIVE REF: 1900-EM-4',
    clueConnections: [
      {
        title: 'Torn Iron Mooring + Missing Oilskins',
        description: 'Explains the frantic emergency run to secure the derrick crane before impact.'
      },
      {
        title: 'Weather Log Inconsistency',
        description: 'Confirms sudden hyper-localized micro-squalls unobserved by mainland outposts.'
      }
    ]
  }
};

export const OTHER_CASES: MysteryCase[] = [
  {
    id: 'somerton-man',
    code: 'ITEM 48-T',
    itemCode: 'CODE: TAMÁM SHUD',
    title: 'The Somerton Man Cryptogram',
    subtitle: 'Cold War Maritime Cipher',
    era: 'DECEMBER 1948',
    location: 'Adelaide, South Australia',
    difficulty: 'Moderate',
    estimatedMinutes: 10,
    heroImage: CASE_IMAGES.somertonScrap,
    plateImage: CASE_IMAGES.somertonScrap,
    plateCaption: 'PLATE II: PERSIAN INSCRIPTION FOUND IN HIDDEN FOB POCKET',
    category: 'detective',
    quote: '“An unidentified corpse on Somerton Beach, clothes devoid of tags, and an unbreakable encrypted cipher.”',
    cluesCount: 9,
    cluesFound: 4,
    totalClues: 9,
    intakeReport: {
      title: 'Forensic Inquest • Somerton Beach',
      date: 'December 1, 1948',
      leadNarrative: 'An unidentifiable man was discovered dead resting against the seawall at Somerton Beach. No signs of trauma, fully dressed in suit and tie with all manufacturer labels surgically removed.',
      secondaryNarrative: 'In a hidden watch fob pocket, police discovered a rolled-up scrap torn from the rare final page of the Rubaiyat of Omar Khayyam bearing two Persian words: "Tamám Shud" (It is finished).',
      criticalAnomaly: 'CRITICAL ANOMALY: An encrypted 5-line handwritten code discovered inside the back cover of the matching copy of the book remains unsolved by military decoders to this day.'
    },
    inquiryMission: 'Uncover the origin of the Persian scrap, decode the micro-stitching in the coat lining, and determine if the Somerton victim was an operative in an early Cold War spy ring.',
    clues: [
      {
        id: 'somerton-1',
        code: 'ITEM 48-A',
        title: 'The Rubaiyat Scrap',
        subtitle: 'Paper Fragment',
        date: 'DEC 1, 1948',
        image: CASE_IMAGES.somertonScrap,
        quote: 'Scrap torn cleanly from the final page; microscopic match confirmed.',
        anomalyTitle: 'CIPHER',
        anomalyText: 'Micro-fibers matched an abandoned car near Jetty Road.',
        anomalyType: 'forensic',
        discovered: true
      }
    ],
    hypotheses: [
      {
        id: 'spy-poison',
        title: 'Covert Intelligence Asset Liquidated with Digitalis',
        description: 'A foreign agent eliminated without leaving trace toxins; books used as a one-time pad cipher.',
        agreePercentage: 62,
        isHistoricallyAccurate: true,
        verdictLabel: 'VERDICT: PARTIAL'
      },
      {
        id: 'dancer-suicide',
        title: 'Tragic Romantic Drifter Suicide',
        description: 'An estranged veteran suffering grief consumed an unknown sleeping tincture alone at nightfall.',
        agreePercentage: 28,
        isHistoricallyAccurate: false,
        verdictLabel: 'VERDICT: UNVERIFIED'
      },
      {
        id: 'black-market',
        title: 'Black Market Smuggling Conflict',
        description: 'Black-marketeer murdered after a contraband handover went awry on the coastline.',
        agreePercentage: 10,
        isHistoricallyAccurate: false,
        verdictLabel: 'VERDICT: UNVERIFIED'
      }
    ],
    historicalSynthesis: {
      title: 'The DNA Breakthrough of Somerton Man',
      subheading: 'South Australia Police & University of Adelaide Modern Forensic Inquest',
      investigator: 'Prof. Derek Abbott & Dr. Colleen Fitzpatrick',
      conclusion: 'In 2022, exhumed DNA forensics matched the Somerton Man to Carl "Charles" Webb, an electrical engineer born in Melbourne who disappeared from family records in 1947.',
      evidenceImage: CASE_IMAGES.somertonScrap,
      evidenceCaption: 'EXHIBIT 48: The Original Persian Fragment',
      archiveRef: 'ARCHIVE REF: 1948-SA-WEB',
      clueConnections: [
        {
          title: 'Missing Laundry Marks + Haberdashery',
          description: 'Linked his clothing directly to custom Melbourne tailors.'
        }
      ]
    }
  },
  {
    id: 'amber-room',
    code: 'ITEM 45-AMB',
    itemCode: 'ST. PETERSBURG',
    title: 'The Disappearing Amber Room',
    subtitle: 'Imperial Treasure Vanishing',
    era: 'AUTUMN 1941',
    location: 'Tsarskoye Selo / Königsberg',
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    heroImage: CASE_IMAGES.amberRoom,
    plateImage: CASE_IMAGES.amberRoom,
    plateCaption: 'PLATE VII: CATHERINE PALACE AMBER PANELS (PRE-1941)',
    category: 'historical',
    quote: '“Six tons of pure amber and gold leaves looted from the Catherine Palace in 1941, vanished without a trace.”',
    cluesCount: 6,
    cluesFound: 0,
    totalClues: 6,
    intakeReport: {
      title: 'War Reparations Docket • Catherine Palace',
      date: 'October 1941',
      leadNarrative: 'Constructed by Prussian sculptors and presented to Peter the Great, the Amber Room comprised six tons of pure amber backed with gold leaf.',
      secondaryNarrative: 'Looted during Operation Barbarossa and shipped to Königsberg Castle, the entire chamber was crated up as Allied bombers advanced. When Soviet forces liberated the castle in 1945, the crates had disappeared.',
      criticalAnomaly: 'CRITICAL ANOMALY: In 1997, an original mosaic Florentine stone panel from the room surfaced in Bremen, Germany, in the possession of an officer’s son.'
    },
    inquiryMission: 'Trace the wartime rail manifest from East Prussia to deep salt mines in Thuringia and deduce whether the treasure was consumed by fire or hidden beneath subterranean shafts.',
    clues: [],
    hypotheses: [
      {
        id: 'castle-fire',
        title: 'Incinerated in the Königsberg Castle Bombing',
        description: 'Intense RAF phosphorus incendiary bombs reached 1,400°C; amber burns like solid pitch at merely 250°C.',
        agreePercentage: 64,
        isHistoricallyAccurate: true,
        verdictLabel: 'VERDICT: PROBABLE'
      },
      {
        id: 'salt-mines',
        title: 'Concealed in Thuringian Subterranean Salt Mines',
        description: 'Loaded onto secret Wehrmacht convoys and walled into abandoned mine tunnels.',
        agreePercentage: 31,
        isHistoricallyAccurate: false,
        verdictLabel: 'VERDICT: UNCONFIRMED'
      },
      {
        id: 'ship-gustloff',
        title: 'Sunk Aboard the MV Wilhelm Gustloff',
        description: 'Transported inside heavy crates aboard the ill-fated liner in January 1945.',
        agreePercentage: 5,
        isHistoricallyAccurate: false,
        verdictLabel: 'VERDICT: DISPROVEN'
      }
    ],
    historicalSynthesis: {
      title: 'The Thermal Fate of the Amber Panels',
      subheading: 'Russian State Archival & Historical Analysis',
      investigator: 'Dr. Alexander Brusov',
      conclusion: 'Forensic excavation in the castle cellars discovered charred bronze fittings and melted amber droplets. The majority of the magnificent chamber was incinerated during the August 1944 firestorms.',
      evidenceImage: CASE_IMAGES.amberRoom,
      evidenceCaption: 'EXHIBIT AMB-1: The Reconstructed Amber Panel',
      archiveRef: 'ARCHIVE REF: 1941-KNB-AMB',
      clueConnections: [
        {
          title: 'Charred Bronze Mountings + Cellar Ruins',
          description: 'Confirmed the room had never left Königsberg before the bombing runs.'
        }
      ]
    }
  },
  {
    id: 'mary-celeste',
    code: 'ITEM 72-CEL',
    itemCode: 'ATLANTIC MARITIME',
    title: 'The Mary Celeste Ghost Ship',
    subtitle: 'Nautical Abandonment Paradox',
    era: 'DECEMBER 1872',
    location: 'Azores, North Atlantic',
    difficulty: 'Expert',
    estimatedMinutes: 12,
    heroImage: CASE_IMAGES.maryCeleste,
    plateImage: CASE_IMAGES.maryCeleste,
    plateCaption: 'PLATE IX: BRIGANTINE UNDER CANVASS (DECEMBER 1872)',
    category: 'strange',
    quote: '“Discovered sailing under full canvas with cargo intact, personal items unmoved, and not a soul aboard.”',
    cluesCount: 14,
    cluesFound: 2,
    totalClues: 14,
    intakeReport: {
      title: 'Admiralty Court Inquest • Gibraltar',
      date: 'December 5, 1872',
      leadNarrative: 'The British brigantine Dei Gratia sighted the Mary Celeste 400 miles east of the Azores. Her sails were set in a windward direction, drifting erratically.',
      secondaryNarrative: 'Boarding the vessel, First Mate Oliver Deveau found six months of provisions, the captain’s personal harmonium and family toys undisturbed, and 1,701 barrels of industrial alcohol in the hold.',
      criticalAnomaly: 'CRITICAL ANOMALY: The ship’s sole lifeboat and chronometer were missing. Nine alcohol barrels were empty. A loose towline trailed behind the stern in the churning water.'
    },
    inquiryMission: 'Analyze the alcohol vapor pressure inside the hold, the cut towline evidence, and determine why Captain Briggs ordered an immediate evacuation into the lifeboat in open sea.',
    clues: [],
    hypotheses: [
      {
        id: 'alcohol-vapor',
        title: 'Alcohol Vapor Ignition & False Explosion',
        description: 'Vapor from porous red oak casks ignited with a loud roar and blue flame without scorching wood, prompting Briggs to tether the crew in the lifeboat until a wave snapped the towline.',
        agreePercentage: 81,
        isHistoricallyAccurate: true,
        verdictLabel: 'VERDICT: HISTORICALLY ACCREDITED'
      },
      {
        id: 'mutiny-salvage',
        title: 'Mutiny and Fraud by the Salvage Crew',
        description: 'Crew mutinied after intoxicating themselves on cargo and fled aboard passing vessels.',
        agreePercentage: 11,
        isHistoricallyAccurate: false,
        verdictLabel: 'VERDICT: DISPROVEN'
      },
      {
        id: 'sea-quake',
        title: 'Submarine Sea-Quake Disorientation',
        description: 'Violent underwater tremors simulated a sinking ship, driving everyone overboard.',
        agreePercentage: 8,
        isHistoricallyAccurate: false,
        verdictLabel: 'VERDICT: UNVERIFIED'
      }
    ],
    historicalSynthesis: {
      title: 'Dr. Andrea Sella’s Combustion Recreation',
      subheading: 'University College London Chemical Inquest (2006)',
      investigator: 'Dr. Andrea Sella, UCL',
      conclusion: 'Modern laboratory tests proved that industrial ethanol produces a "pressure-wave flame" that creates a terrifying acoustic blast without charring paper or wood. Captain Briggs feared an imminent catastrophic detonation, took to the lifeboat with his wife and child, and the towline snapped during a squall.',
      evidenceImage: CASE_IMAGES.maryCeleste,
      evidenceCaption: 'EXHIBIT CEL: Admiralty Towline Reconstruction',
      archiveRef: 'ARCHIVE REF: 1872-GIB-MC',
      clueConnections: [
        {
          title: '9 Empty Barrels + Intact Hold',
          description: 'Proves escaping volatile gas rather than cargo leaks.'
        }
      ]
    }
  },
  {
    id: 'dyatlov-pass',
    code: 'ITEM 91-DYA',
    itemCode: 'UNOPENED DOSSIER',
    title: 'The Dyatlov Alpine Pass',
    subtitle: 'Kholat Syakhl Snow Enigma',
    era: 'FEBRUARY 1959',
    location: 'Ural Mountains, Soviet Union',
    difficulty: 'Expert',
    estimatedMinutes: 12,
    heroImage: CASE_IMAGES.dyatlovTent,
    plateImage: CASE_IMAGES.dyatlovTent,
    plateCaption: 'PLATE XI: EXPEDITION TENT 1079 SLIT FROM WITHIN',
    category: 'strange',
    quote: '“Kholat Syakhl expedition mystery: cut tents, missing footwear, and unexplainable radiation signatures logged at 1079 summit.”',
    cluesCount: 11,
    cluesFound: 1,
    totalClues: 11,
    intakeReport: {
      title: 'Soviet Inquest Dossier • Sverdlovsk Bureau',
      date: 'February 26, 1959',
      leadNarrative: 'Nine experienced ski hikers led by Igor Dyatlov failed to report back from Otorten peak. Search parties found their canvas tent slashed wide open from the inside on the frozen slope.',
      secondaryNarrative: 'Footprints showed the hikers descended into -30°C blizzard wearing only socks and underwear. Bodies were discovered over hundreds of meters with unexplained blunt force chest fractures.',
      criticalAnomaly: 'CRITICAL ANOMALY: Several items of clothing tested positive for abnormal levels of radiation, while the Soviet prosecutor abruptly stamped the case "Cause: Spontaneous force of nature" and sealed the dossier.'
    },
    inquiryMission: 'Investigate the slab avalanche physics, infrasound wind vortexes, and determine what drove 9 elite mountaineers from their shelter in sub-zero frost.',
    clues: [],
    hypotheses: [
      {
        id: 'slab-avalanche',
        title: 'Delayed Slab Avalanche / Snow Plinth Collapse',
        description: 'Trenching the tent under windblown snow triggered a delayed slab displacement that crushed chests while sleeping, forcing an emergency exit.',
        agreePercentage: 74,
        isHistoricallyAccurate: true,
        verdictLabel: 'VERDICT: SCIENTIFIC CONSENSUS'
      },
      {
        id: 'infrasound',
        title: 'Karman Infrasound Panic Vortex',
        description: 'High winds over the curved mountain peak generated subsonic frequencies that induced visceral terrors.',
        agreePercentage: 18,
        isHistoricallyAccurate: false,
        verdictLabel: 'VERDICT: SECONDARY'
      },
      {
        id: 'military-test',
        title: 'Clandestine Parachute Mine Ordnance Drop',
        description: 'Soviet military tests irradiated the zone and shockwaves concussed the campsite.',
        agreePercentage: 8,
        isHistoricallyAccurate: false,
        verdictLabel: 'VERDICT: UNVERIFIED'
      }
    ],
    historicalSynthesis: {
      title: 'Nature Communications 2021 Physical Simulation',
      subheading: 'EPFL Lausanne & ETH Zurich Biomechanical Study',
      investigator: 'Prof. Alexander Puzrin & Johan Gaume',
      conclusion: 'State-of-the-art computational simulation validated that katabatic wind deposited heavy snow drift onto a cut slope, unleashing a delayed small cohesive slab avalanche directly upon the sleeping bags. The blunt force injuries matched heavy snow impact.',
      evidenceImage: CASE_IMAGES.dyatlovTent,
      evidenceCaption: 'EXHIBIT DYA: Cut Canvas & Ski Pole Anchor',
      archiveRef: 'ARCHIVE REF: 1959-URL-DYAT',
      clueConnections: [
        {
          title: 'Slashed Tent Canvas + Bare Footprints',
          description: 'Emergency escape in pitch dark amidst suffocating snow load.'
        }
      ]
    }
  }
];

export const INITIAL_PROFILE: SleuthProfile = {
  name: 'Insp. M. Vance',
  rank: 'Senior Sleuth Rank IV',
  idNumber: '#409-B',
  avatar: CASE_IMAGES.detectivePortrait,
  clearance: 'Tier III',
  casesSolved: 14,
  accuracy: 92,
  meritPoints: 2850,
  streakDays: 4,
  savedCases: ['flannan-isles', 'dyatlov-pass']
};

export const SAMPLE_EVIDENCE_SLIPS = [
  {
    title: 'Telegraph Excerpt • Hesperus Dispatch',
    date: '15 Dec 1900',
    meta: 'Admiralty Morse Record #04',
    content: '“Steamer Archtor reports Flannan light extinguished for three consecutive nights. Severe squalls prevailing in Outer Hebrides.”'
  },
  {
    title: 'Keepers Roster • Northern Lighthouse Board',
    date: 'Autumn 1900',
    meta: 'Personnel Record #119-B',
    content: '“Ducat, James (Principal). Marshall, Thomas (2nd Assistant). MacArthur, Donald (Occasional). All verified sober, seasoned seamen of exemplary conduct.”'
  },
  {
    title: 'Muirhead Inquest Excerpt • Barometer Trace',
    date: '26 Dec 1900',
    meta: 'Meteorological Log Eilean Mòr',
    content: '“Barometer indicates violent pressure drop on evening of the 15th, recovering by sunrise. Clock stopped dead at 1:55.”'
  }
];
