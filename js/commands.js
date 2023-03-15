var password = "a";//"el psy kongroo";

hardinfo = [
"SERN@server",
"------------",
"Arch: 80486SX",
"Host: IBN 5100",
"Kernel: IBN 0.0.12",
"Uptime: 170530 days, 8 hours, 6 mins",
"Terminal: lxterminal",
"Terminal Font: consolas",
"CPU: IBN PALM 1.9 MHz",
"Memory: 571b / 62034b",
"Storage: IBN FlashSystem 5100"
];
whois = [

  "Initiating worldline scan...",
"Locating domain registry...",
"Domain registration details found:",
"Domain name: chronotech.net",
"Owner: SERN Research Division",
"Registrant contact email: contact@sern-chronotech.net",
"Registrar: Network Solutions, LLC",
"Registration date: 2011-04-06",
"The timeline remains unchanged.",

];

ls = [

  "1st_design/   @channel/          company_welcome.txt*     operation_skuld/",
  "mail_system/            FutureGadgetLab/   phone_wave/         gate_theory/",

];

whoami = [

  "evident",

];

secret = [

  'welcome system administrator',

];

projects = [

  "Still curating... most projects are offline, on GitHub, or confidential.",

];

help = [

  '<span class="command">[NAME] whoami</span> - [DESCRIPTION] user information',
  '<span class="command">[NAME] whois</span> - [DESCRIPTION] domain specification',
  '<span class="command">[NAME] su</span> - [DESCRIPTION] root user auth',
  '<span class="command">[NAME] ls</span> - [DESCRIPTION] list directories',
  '<span class="command">[NAME] clear</span> - [DESCRIPTION] clear terminal',
  '<span class="command">[INPUT] ARROW_KEY_UP | ARROW_KEY_DOWN</span> - [DESCRIPTION] scroll through command history',
  '<span class="command">[INPUT] ARROW_KEY_LEFT | ARROW_KEY_RIGHT</span> - [DESCRIPTION] partially working inplace editing',
  '<span class="command">[NAME] history</span> - [DESCRIPTION] list command history',
  '<span class="command">[NAME] spec</span> - [DESCRIPTION] specifications',
  '<span class="command">[NAME] email</span> - [DESCRIPTION] research lead email',
  '<span class="command">[NAME] cat [FILE_NAME]</span> - [DESCRIPTION] read file contents',
  '<span class="command">[NAME] cd [FOLDER_NAME|..]</span> - [DESCRIPTION] goto directory or parent directory',

];

banner = [
  "soc_vref_reg_value 0x 00000019 0000001b 00000018 0000001b 0000001a 0000001b 0000001a 0000001a 0000001b 0000001c",
  "0000001a 0000001b 0000001b 0000001a 00000019 0000001b 0000001e 0000001b 0000001d 0000001b 0000001b 0000001c 0000001b",
  "0000001d 0000001d 0000001c 0000001b 0000001c 0000001b 0000001c 0000001b 0000001d dram_vref_reg_value 0x 0000004f",
"auto size-- 65535DDR cs0 size: 48b",
"DDR cs1 size: 0MB",
"DMC_DDR_CTRL: 00c00054DDR size: 48b",
"cs0 DataBus test pass",
"cs0 AddrBus test pass",
"non-sec scramble use random key",
"1STBLOB 00000200        00040000 BL2E    00040200        00013000",
"BL2X    00053200        00011000 DDRFIP  00064200        00040000 000a4200 ",
"100bdlr_step_size ps== 448",
"load mask:31",
"Load: DDRFIP From: eMMC - 3.0 src: 0000a000, dst: f700ab90, size: 00009600sdemmc src: ;",
"Load: DDRFIP From: eMMC - 3.0 src: 00014000, dst: f700ab90, size: 00009600sdemmc src: ;",
"Load: DDRFIP From: eMMC - 3.0 src: 0001e000, dst: f700ab90, size: 00009600sdemmc src: ;",
"boot times 0",
"INFO: bl2_load_bl2ex start!",
"INFO: load ...",
"Load: BL2E From: eMMC - 3.0 src: 00002000, dst: 00fffff0, size: 00011000sdemmc src: ;",
"INFO: check ...",
"SHA CHK OK!",
];

// root path
welcome_message = ['Welcome to SERN, a company dedicated to advancing the field of time travel and changing the course of history. ',
'As a member of our team, you will have the opportunity to work on cutting-edge research and development,',
'utilizing the latest technologies and methodologies to push the boundaries of what is possible. ',
'At SERN, we understand the importance of collaboration and teamwork,', 
'and we encourage our employees to share their ideas and insights freely. ',
'Together, we can unlock the secrets of time and space, and pave the way for a brighter future. ',
'But with great power comes great responsibility. ',
'We must be careful in our research and cautious in our actions,',
'mindful of the consequences that our discoveries may bring. ',
'We must use our knowledge and skills for the betterment of humanity, and never for personal gain. ',
'As a member of SERN, you have the opportunity to shape the future in profound ways. ',
"Let's work together to make that future a reality."];

notes = [
  "As a leading research institution dedicated to advancing the field of time travel, SERN was ",
  "ecstatic to discover the first functional time machine. The machine was discovered by our",
  "team of scientists during a series of experiments involving high-energy particle collisions",
  "and quantum entanglement.",

  "The machine operates by creating a localized temporal field using a complex network of ",
  "superconducting magnets and exotic materials, such as tritium and negative mass particles. ",
  "By carefully controlling the energy levels and temporal gradients within the field, the ",
  "machine is able to transport matter and energy across temporal boundaries.",

  "Our team of scientists quickly realized the immense potential of the time machine for both ",
  "scientific research and military applications. Initial experiments demonstrated the machine's",
  "ability to send objects and individuals back in time, allowing us to study historical events",
  "firsthand and even alter the course of history.",

  "Further refinements to the machine allowed us to explore different possible timelines and ",
  "alternate universes, opening up a whole new field of research into the nature of time and",
  "space.",

  "While the discovery of the time machine has been kept secret from the general public, SERN ",
  "has continued to push the boundaries of temporal research, with the ultimate goal of using ",
  "our knowledge to benefit humanity and shape a brighter future.",
];

dMailStandard = [
  "Test messages before sending: Since D-Mails ",
  "have the potential to change the course of events, ",
  "the user should test their message before sending",
  "it to ensure that it will have the desired effect.",
  "-------------------------------------------------",
  "Document message content and recipients: The user should keep detailed records of the content of each D-Mail sent, ",
  "as well as the recipients and the intended outcomes. This can help avoid confusion or unintended consequences down the line.",
  "-------------------------------------------------",
  "Be aware of potential side effects: The user should be aware ",
  "that sending a D-Mail may have unintended side effects,",
  "such as changing the memories or actions of other individuals. ",
  "They should consider these potential side effects when deciding whether to send a message.",
  "-------------------------------------------------",
  "Use D-Mail sparingly: Due to the potential consequences of changing the timeline, ",
  "the user should use D-Mail sparingly and only when necessary. ",
  "They should consider whether other methods of communication or ",
  "problem-solving might be more appropriate before resorting to time travel.",
  "-------------------------------------------------",
  "Be prepared for changes to the timeline: The user should be aware that sending a D-Mail may ",
  "cause significant changes to the timeline and be prepared to adapt to these changes as needed. ",
  "They should consider the potential impact on their own lives and relationships, ",
  "as well as the broader consequences for society as a whole.",
  ];
  investigation = [
  "The Future Gadget Club is a group of misguided and inexperienced young individuals",
  " who are dabbling in science and technology they do not fully understand.",
  "However, their accidental discovery of a time machine has caught our attention,",
  "and we see it as a significant threat to our plans for the future of the world.",
  "-------------------------------------------------",
  "We have been monitoring the Future Gadget Club closely, gathering intelligence on their",
  "every move and attempting to infiltrate their ranks. We know that they are a creative and",
  " resourceful group, but we believe that they are no match for the power and influence of SERN.",
  "-------------------------------------------------",
  "Our primary goal is to capture the time machine and the technology behind it, as we see it ",
  "as a tool that could be used to alter history and disrupt our carefully laid plans for the future.",
  "We will stop at nothing to achieve this goal, and we are confident that our resources and",
  "expertise will give us the upper hand in any confrontation with the Future Gadget Club.",
  ];
  research = [

    "We first considered the physical properties of the [REDACTED],", 
    "which has been modified to emit high-frequency electromagnetic waves ",
    "that can penetrate solid objects. These waves interact with the target message, ",
    "creating a resonance effect that allows the message to tunnel through the space-time continuum. ",
    "This effect is similar to quantum tunneling, a phenomenon where a particle can pass through ",
    "a potential barrier even when its energy is less than the height of the barrier.",

    "Our analysis suggests that the D-Mail function of the [REDACTED] operates through ",
    "a complex interplay of electromagnetic fields and quantum tunneling. ",
    "The message is encoded in a high-frequency electromagnetic wave that is emitted by the Phone Microwave, ",
    "and this wave is tuned to match the resonance frequency of the target message. ",
    "When the wave interacts with the message, it creates a resonance effect that allows the message ",
    "to tunnel through the space-time continuum and travel back in time.",

    "The rate of change of the energy density of the message as it passes through the [REDACTED] can be ",
    "described by the equation ∂(ρc)/∂t + ∇ · (ρc * u) = -∇ · q + Q, where ρc is the energy density ",
    "of the message, t is time, u is the velocity of the message, q is the heat flux vector, and Q ",
    "is the energy source term. This equation takes into account the effects of the message's ",
    "energy density, velocity, and heat flux, as well as any external sources of energy. ",
    "The gradient operator ∇ represents the rate of change of a function with respect ",
    "to its spatial coordinates. The partial derivative operator ∂/∂t represents the rate ",
    "of change of a function with respect to time.",

  ]
  schematic_overview = [
    "                                  +-----+",
    "     +----[PWR]-------------------| IFR |--+",
    "    |                            +-----+  |",
    "    |           GND/RST2  [ ] [ ]         |",
    "    |         MOSI2/SCK2  [ ] [ ]  SCL[ ] |   D0",
    "    |            5V/MISO2 [ ] [ ]  SDA[ ] |   D1",
    "    |                             AREF[ ] |",
    "    |                              GND[ ] |",
    "    | [ ]N/C                        13[ ]~|   B7",
    "    | [ ]IOREF                      12[ ]~|   B6",
    "    | [ ]RST                        11[ ]~|   B5",
    "    | [ ]3V3      +----------+      10[ ]~|   B4",
    "    | [ ]5v       | SERN     |       9[ ]~|   H6",
    "    | [ ]GND      |   MICRO  |       8[ ]~|   H5",
    "    | [ ]GND      +----------+            |",
    "    | [ ]Vin                         7[ ]~|   H4",
    "    |                                6[ ]~|   H3",
    "    | [ ]A0                          5[ ]~|   E3",
    "    | [ ]A1                          4[ ]~|   G5",
    "    | [ ]A2                     INT5/3[ ]~|   E5",
    "    | [ ]A3                     INT4/2[ ]~|   E4",
    "    | [ ]A4                       TX>1[ ]~|   E1",
    "    | [ ]A5                       RX<0[ ]~|   E0",
    "    | [ ]A6                               |   ",
    "    | [ ]A7                     TX3/14[ ] |   J1",
    "    |                           RX3/15[ ] |   J0",
    "    | [ ]A8                     TX2/16[ ] |   H1",         
    "    | [ ]A9                     RX2/17[ ] |   H0",
    "    | [ ]A10               TX1/INT3/18[ ] |   D3",       
    "    | [ ]A11               RX1/INT2/19[ ] |   D2",
    "    | [ ]A12           I2C-SDA/INT1/20[ ] |   D1",         
    "    | [ ]A13           I2C-SCL/INT0/21[ ] |   D0",
    "    | [ ]A14                              |    ",        
    "    | [ ]A15                              |   Ports:",
    "    |                RST SCK MISO         |    22=A0  23=A1   ",
    "    |         ICSP   [ ] [ ] [ ]          |    24=A2  25=A3   ",
    "    |                [ ] [ ] [ ]          |    26=A4  27=A5   ",
    "    |                GND MOSI 5V          |    28=A6  29=A7   ",
    "    | G                                   |    30=C7  31=C6   ",
    "    | N 5 5 4 4 4 4 4 3 3 3 3 3 2 2 2 2 5 |    32=C5  33=C4   ",
    "    | D 2 0 8 6 4 2 0 8 6 4 2 0 8 6 4 2 V |    34=C3  35=C2   ",
    "    |         ~ ~                         |    36=C1  37=C0   ",
    "    | @ # # # # # # # # # # # # # # # # @ |    38=D7  39=G2   ",
    "    | @ # # # # # # # # # # # # # # # # @ |    40=G1  41=G0   ",
    "    |           ~                         |    42=L7  43=L6   ",
    "    | G 5 5 4 4 4 4 4 3 3 3 3 3 2 2 2 2 5 |    44=L5  45=L4   ",
    "    | N 3 1 9 7 5 3 1 9 7 5 3 1 9 7 5 3 V |    46=L3  47=L2   ",
    "    | D                                   |    48=L1  49=L0    SPI:",
    "    |                                     |    50=B3  51=B2     50=MISO 51=MOSI",
    "    |     2560                ____________/    52=B1  53=B0     52=SCK  53=SS ",
    "     \_______________________/  ",       
  ]
  theory = [
    "The universe is governed by a set of quantum equations that dictate the behavior of ",
    "particles and energy fields, giving rise to various events and phenomena. ",
    "At the core of these equations is the concept of a 'world line,' which describes ",
    "the trajectory of events for individuals and groups, influenced by various factors ",
    "including personal choices, external stimuli, and quantum field interactions.",

    "Beneath this layer of equations lies a hidden layer of pure consciousness, ",
    "a universal mind that can bend and warp the laws of physics, creating new universes ",
    "and realities. This consciousness is reflected in the collective actions and choices ",
    "of individuals and plays a vital role in shaping the course of events and influencing ",
    "the quantum equations that govern the universe. By understanding these laws, ",
    "we can gain insight into the very nature of reality and unlock new truths about our place in the world.",
  ]
// end root path