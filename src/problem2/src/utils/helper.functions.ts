import bNEO from "../assets/bNEO.svg";
import ampLUNA from "../assets/ampLUNA.svg";
import ATOM from "../assets/ATOM.svg";
import axlUSDC from "../assets/axlUSDC.svg";
import BLUR from "../assets/BLUR.svg";
import BUSD from "../assets/BUSD.svg";
import BUSDT from "../assets/BUSDT.svg";
import ETH from "../assets/ETH.svg";
import EVMOS from "../assets/EVMOS.svg";
import GMX from "../assets/GMX.svg";
import IBCX from "../assets/IBCX.svg";
import IRIS from "../assets/IRIS.svg";
import KUJI from "../assets/KUJI.svg";
import LSI from "../assets/LSI.svg";
import LUNA from "../assets/LUNA.svg";
import OKB from "../assets/OKB.svg";
import OKT from "../assets/OKT.svg";
import OSMO from "../assets/OSMO.svg";
import rATOM from "../assets/rATOM.svg";
import rSWTH from "../assets/rSWTH.svg";
import stATOM from "../assets/stATOM.svg";
import stEVMOS from "../assets/stEVMOS.svg";
import stLUNA from "../assets/stLUNA.svg";
import stOSMO from "../assets/stOSMO.svg";
import STRD from "../assets/STRD.svg";
import SWTH from "../assets/SWTH.svg";
import USC from "../assets/USC.svg";
import USD from "../assets/USD.svg";
import USDC from "../assets/USDC.svg";
import WBTC from "../assets/WBTC.svg";
import wstETH from "../assets/wstETH.svg";
import YieldUSD from "../assets/YieldUSD.svg";
import ZIL from "../assets/ZIL.svg";

const icons = [
  { image: bNEO, key: "bNEO" },
  { image: ampLUNA, key: "ampLUNA" },
  { image: axlUSDC, key: "axlUSDC" },
  { image: ATOM, key: "ATOM" },
  { image: BLUR, key: "BLUR" },
  { image: BUSD, key: "BUSD" },
  { image: BUSDT, key: "BUSDT" },
  { image: ETH, key: "ETH" },
  { image: EVMOS, key: "EVMOS" },
  { image: GMX, key: "GMX" },
  { image: IBCX, key: "IBCX" },
  { image: IRIS, key: "IRIS" },
  { image: KUJI, key: "KUJI" },
  { image: LSI, key: "LSI" },
  { image: LUNA, key: "LUNA" },
  { image: OKB, key: "OKB" },
  { image: OKT, key: "OKT" },
  { image: OSMO, key: "OSMO" },
  { image: rATOM, key: "rATOM" },
  { image: rSWTH, key: "rSWTH" },
  { image: stATOM, key: "stATOM" },
  { image: stEVMOS, key: "stEVMOS" },
  { image: stLUNA, key: "stLUNA" },
  { image: stOSMO, key: "stOSMO" },
  { image: STRD, key: "STRD" },
  { image: SWTH, key: "SWTH" },
  { image: USC, key: "USC" },
  { image: USD, key: "USD" },
  { image: USDC, key: "USDC" },
  { image: WBTC, key: "WBTC" },
  { image: wstETH, key: "wstETH" },
  { image: YieldUSD, key: "YieldUSD" },
  { image: ZIL, key: "ZIL" },
];

export const getIcon = (name: string) => {
  return icons.find((icon) => icon.key.toLowerCase() === name.toLowerCase());
};
