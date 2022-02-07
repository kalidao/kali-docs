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

- Ethereum: [0xA051591c52c1378bc4a34c57445D181deEF100f0](https://etherscan.io/address/0xa051591c52c1378bc4a34c57445d181deef100f0#code)
- Arbitrum: [0x6fcc42233f909a46EB006A7bd6BfE9D94928e64a](https://arbiscan.io/address/0x6fcc42233f909a46eb006a7bd6bfe9d94928e64a#code)
- Polygon: [0x3f15724d409444743613AdaFA4A4a4B49D9Ab2F9](https://polygonscan.com/address/0x3f15724d409444743613adafa4a4a4b49d9ab2f9#code)
- Rinkeby: [0x58AC6a1Dd37b374Eb98FE751fc64502bB04Fb80f](https://rinkeby.etherscan.io/address/0x58ac6a1dd37b374eb98fe751fc64502bb04fb80f#code)

## Security

An audit on the core Kali contracts was conducted by BlockApex and can be reviewed [here](https://github.com/kalidao/kali-contracts/blob/main/audit/Final_Audit_KaliDAO.pdf). Unit tests in JS for the core contracts, including extensions, can be run [here](https://github.com/kalidao/kali-contracts/tree/main/test).

## [FAQ](./faq/README.md)
