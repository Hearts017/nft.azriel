import Cards from "../components/cards";
import Footer from "../components/footer";
import "./pages.css"

import nfts from '../data/nft-list/nftList'

export default function Marketplace() {
  return (
    <>
      <div className="marketplaceContainer">
        {nfts.map(nft => (
          <Cards key={nft.id} nftName={nft.nftName} price={nft.price} image={nft.image} days={nft.days}/>
        ))}
      </div>

      <Footer />
    </>

  );
}