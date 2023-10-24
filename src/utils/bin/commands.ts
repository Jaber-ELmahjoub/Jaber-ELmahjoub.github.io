import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().filter(cmd => cmd !== 'banner').join(', ');
  var c = '';
  const nonBannerCommands = Object.keys(bin).sort().filter(cmd => cmd !== 'banner');
  for (let i = 0; i < nonBannerCommands.length; i++) {
    if (i % 7 === 0) {
      c += nonBannerCommands[i] + '\n';
    } else {
      c += nonBannerCommands[i] + '\n';
    }
  }
  return `Welcome to my portfolio! Here are all the available commands:
\n${c}\n`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am <span style="font-size: 33px;">${config.name} \n</span>As a 22-year-old, I'm a passionate and driven junior Penetration Tester and Security researcher,\nexploring the intricacies of cybersecurity and an active CTF player.\nSimultaneously, I'm on a quest for knowledge, pursuing a Master's degree in Information Security Systems (SSI)."`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const contact = async (args: string[]): Promise<string> => {
  return `Email : officieljaber@gmail.com 
Linkedin : linkedin.com/in/jaber-el-mahjoub-178167151/ 
Phone: +212687930859
  `
};

// career
export const career = async (args: string[]): Promise<string> => {
  return `<p style="font-size: 30px;">My academic career:</p> 
2022-2024 Master degree Information Security Systems ENSA Kenitra.
2020-2022 Computer Science Bachelor Degree FST Tangier.
2018-2019 Scientific Baccalaureate in Mathematics.

<p style="font-size: 30px;">My experiences:</p> 
- Team leader and security instructor at Google Developer Student Clubs at ENSAK.
- CTF player and security challenges solving
- Aerospace Intership : Development of software for the ground station of a nanosatellite. 
  `
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
  ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
  ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
  ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
  ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
  ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝                                                                  
                                                                
Type 'help' to see the list of available commands.
`;
};
