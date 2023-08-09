import { createContext, useState } from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { PlayerManagement } from "../components/features/PlayerManagement";
import PlayerDetails from "../components/features/PlayerManagement/playerDetails";
import Layout from "../components/Layout";
import AddUpdatePlayer from '../components/features/PlayerManagement/grid-view/AddUpdatePlayer';
import {RecoilRoot, atom, useRecoilValue, useRecoilState } from "recoil";
export const PlayerContext: any = createContext({
  setopenPlayerDetailTab: () => { },
  playerDetailId: {},
  setPlayerDetailId: () => { },
  setopenAddPlayerTab: () => { },
  setReloadPlayerGrid: () => { },
});

const Player = () => {
  const [connectorList, setConnectorList] = useState([]);
  const [openPlayerDetailTab, setOpenPlayerDetailTab] = useState(false);
  const [playerDetailId, setPlayerDetailId] = useState({});
  const [openAddPlayerTab, setOpenAddPlayerTab] = useState(false);
  const [reloadPlayerGrid, setReloadPlayerGrid] = useState(false);
  return (
    <RecoilRoot>
    <Layout>
      <PlayerContext.Provider
        value={{ setOpenPlayerDetailTab, connectorDetailId: playerDetailId, setPlayerDetailId, setOpenAddPlayerTab, setReloadPlayerGrid}}
      >
        {openPlayerDetailTab && <PlayerDetails />}
        {openAddPlayerTab && <AddUpdatePlayer />}
        <h2 className="text-xl font-bold">Player Management</h2>
        <Breadcrumbs currentPage={"Player Management"} />
        <PlayerManagement></PlayerManagement>
      </PlayerContext.Provider>
    </Layout>
    </RecoilRoot>
  );
};

export default Player;
