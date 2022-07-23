# Kali

Kali is an application to launch DAO smart contracts and form companies. It allows founders, funds and communities to tokenize membership, build on-chain governance, and truly enforce their commitments with code. It is end-to-end, so users don't need to know anything about coding, contracts, deployment, or run their own servers or nodes to manage proposals and voting. The Kali codebase is inspired by the [Compound](https://github.com/compound-finance/compound-protocol/tree/master/contracts/Governance) and [Moloch](https://molochdao.gitbook.io/handbook/introduction/wtf-is-moloch) frameworks, prioritizing lean, reasonably optimized contracts. The application fills in legal gaps, as well, by allowing users to draft and wrap their DAOs and token launches with battle-tested legal agreements, such as LLC structures for investment clubs and companies.

## Features

V1 includes the following features:
- **tokenized votes** as ERC-20 assets, which can be transferable or non-transferable
- **delegateable votes** to representatives
- **customizable governance** settings, such as voting periods and approval thresholds
- **quorum, supermajority** threshold settings, which can be assigned to proposal types
- **gas-less metaTX support** for voting and token transfers
- **extension support**, including fundraising by token sale or 'tribute', whitelisting, and 'ragequit' 
- **treasury support**, including ETH, ERC-20, NFT and ERC-1155

More extensive discussion of the Kali DAO contracts can be found in the [repo](https://github.com/kalidao/kali-contracts/blob/main/README.md). 

## Legal Support

Kali was incubated by [LexDAO](https://www.lexdao.coop/) and [Seed Club](https://seedclub.xyz/) to solve the legal pain points of web3 founders and funds.

It includes a legal drafting tool for LLC, Investment Club and UNA governing docs, and Kali users can instantly deploy an LLC by minting an NFT under the [master operating agreement of KaliCo Ricardian LLC](https://gateway.pinata.cloud/ipfs/QmdHFNxtecmCNcTscWJqnA4AiASyk3SHCgKamugLHqR23i), a Delaware Series LLC. For more information on this formation system, review the sister LexDAO research project, [Ricardian LLC](https://ricardian.gitbook.io/ricardian-llc/).

For formation assistance for standalone LLCs and questions on DAO legal setup and compliance, Kali integrates with the [LexDAO community of lawyers and engineers](https://www.lexdao.coop/#/directory).

### KaliCo Ricardian LLC

![image](https://user-images.githubusercontent.com/92001561/152853748-ef78c1f7-5ed2-4f7e-83da-e6ea03eb0487.png)

## DAO Deployments

A running list of contracts deployed on Ethereum, Arbitrum, Polygon and Rinkeby (testnet) are catalogued [here](https://github.com/kalidao/kali-ui/blob/main/constants/addresses.js). The verified KaliDAO factory contracts are:

- Ethereum: [0x8bD48C45d40724E8424C3aAa4097257A38A98024](https://etherscan.io/address/0x8bD48C45d40724E8424C3aAa4097257A38A98024#code)
- Arbitrum: [0x045cbcBA76a7EcF82d0f6B5DCc0881B3C12E37d0](https://arbiscan.io/address/0x045cbcBA76a7EcF82d0f6B5DCc0881B3C12E37d0#code)
- Optimism: [0xe8E08113Dc0f2B6392A4bD14d7F1d9AA6E89e1e3](https://arbiscan.io/address/0xe8E08113Dc0f2B6392A4bD14d7F1d9AA6E89e1e3#code)
- Polygon: [0xeb37fc7F7781C4B6395b093359aaaFD285DaA6b9](https://polygonscan.com/address/0xeb37fc7F7781C4B6395b093359aaaFD285DaA6b9#code)
- Rinkeby: [0x1aAF0d0305B8e5685bCA94F35409547fA4bCD548](https://rinkeby.etherscan.io/address/0x1aAF0d0305B8e5685bCA94F35409547fA4bCD548#code)
- Goerli: [0xDDdFf70C77Cffcf97Fb91F7aC4aD0E12E8C14571](https://rinkeby.etherscan.io/address/0xDDdFf70C77Cffcf97Fb91F7aC4aD0E12E8C14571#code)

## Security

An audit on the core Kali contracts was conducted by BlockApex and can be reviewed [here](https://github.com/kalidao/kali-contracts/blob/main/audit/Final_Audit_KaliDAO.pdf). Unit tests in JS for the core contracts, including extensions, can be run [here](https://github.com/kalidao/kali-contracts/tree/main/test).

## [FAQ](./faq/README.md)
