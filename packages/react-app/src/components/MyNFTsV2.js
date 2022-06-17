import React,{useState} from "react";
import styled, { css } from 'styled-components';
import Loader from 'react-loader-spinner'
import { Waypoint } from "react-waypoint";

import { useWeb3React } from '@web3-react/core'
import { addresses, abis } from "@project/contracts";
import NFTHelper from 'helpers/NFTHelper';
import { ethers } from "ethers";

import DisplayNotice from "components/DisplayNotice";
import ViewNFTV2Item from "components/ViewNFTsV2Item";
import { ItemH } from "./SharedStyling";
// import ViewNFTItemV2 from "components/ViewNFTsItemV2";
// import ViewNFTV2Item from "./ViewNFTsV2Item";

const provider = new ethers.providers.JsonRpcProvider("https://kovan.infura.io/v3/4ff53a5254144d988a8318210b56f47a");

// Create Header
function MyNFTs({controlAt, setControlAt, setTokenId}) {
  const { account } = useWeb3React();

  const [nftReadProvider, setNftReadProvider] = React.useState(null);
  // const [NFTRewardsContract, setNFTRewardsContract] = React.useState(null);
  const [NFTObjects, setNFTObjects] = useState([]);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!!(provider && account)) {
      const contractInstance = new ethers.Contract(
        addresses.rockstarV2,
        abis.rockstarV2,
        provider
      );
      setNftReadProvider(contractInstance);
    //   let signer = provider.getSigner(account);
    //   const signerInstance = new ethers.Contract(
    //     addresses.rockstarV2,
    //     abis.rockstarV2,
    //     signer
    //   );
    //   setNftWriteProvider(signerInstance);
    //   const NFTRewardsInstance = new ethers.Contract(
    //     addresses.NFTRewards,
    //     abis.NFTRewards,
    //     signer
    //   );
    //   setNFTRewardsContract(NFTRewardsInstance);
    }
  }, [account, provider]);

  React.useEffect(() => {
    if (nftReadProvider) {
      fetchNFTDetails();
    }
  }, [account, nftReadProvider]);


  // to fetch NFT Details
  const fetchNFTDetails = async () => {
    let balance = await NFTHelper.getNFTBalance(account, nftReadProvider);
    for(let i= 0; i<balance; i++){
      let tokenId = await NFTHelper.getTokenOfOwnerByIndex(account, i, nftReadProvider)
      let tokenURI = await NFTHelper.getTokenURIByIndex(tokenId, nftReadProvider);
      // let NFTObject = await NFTHelper.getTokenData(tokenId, nftReadProvider,NFTRewardsContract)
      let url = await callFunction(tokenURI)
      setNFTObjects((prev) => [...prev, url]);
      setLoading(false);
    }
  }


  const callFunction =  async (tokenURI) => {
      let tokenUrl = tokenURI.replace('ipfs://','https://ipfs.io/ipfs/')
      let response = await fetch(`${tokenUrl}`);
      let data = await response.json()
      return data
  }

  return (
    <>
      {loading &&
        <ContainerInfo>
          <Loader
           type="Oval"
           color="#35c5f3"
           height={40}
           width={40}
          />
        </ContainerInfo>
      }

      {!loading && NFTObjects.length == 0 &&
        <ContainerInfo>
          <DisplayNotice
            title="No ROCKSTAR tokens are available in your account"
            theme="primary"
          />
        </ContainerInfo>
      }


      {!loading && NFTObjects.length != 0 &&
        <ItemH id="scrollstyle-secondary">

          {Object.keys(NFTObjects).map(index => {
            if (NFTObjects) {
              return (
                <ViewNFTV2Item
                  key={NFTObjects[index].id}
                  NFTObject={NFTObjects[index]}
                  nftReadProvider={nftReadProvider}
                  // nftWriteProvider={nftWriteProvider}
                  controlAt={controlAt}
                  setControlAt={setControlAt}
                  setTokenId={setTokenId}
                />
              );
            }

          })}
        </ItemH>
      }
    </>
  );
}

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  font-weight: 200;
  align-content: center;
  align-items: center;
  justify-content: center;

  max-height: 80vh;
`
const ContainerInfo = styled.div`
  padding: 20px;
`

const Items = styled.div`
  display: block;
  align-self: stretch;
  padding: 10px 20px;
  overflow-y: scroll;
  background: #fafafa;
`

// Export Default
export default MyNFTs;
