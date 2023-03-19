import { createContext, useState } from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { PlayerManagement } from "../components/features/PlayerManagement";
import PlayerDetails from "../components/features/PlayerManagement/playerDetails";
import Layout from "../components/Layout";
export const PlayerContext: any = createContext({
  setopenPlayerDetailTab: () => { },
  playerDetailId: {},
  setPlayerDetailId: () => { }
});

const Player = () => {
  const [connectorList, setConnectorList] = useState([]);
  const [openPlayerDetailTab, setOpenPlayerDetailTab] = useState(false);
  const [playerDetailId, setPlayerDetailId] = useState({});

  return (
    <Layout>
      <PlayerContext.Provider
        value={{ setOpenPlayerDetailTab, connectorDetailId: playerDetailId, setPlayerDetailId }}
      >
        {openPlayerDetailTab && <PlayerDetails />}
        <h2 className="text-xl font-bold">Player Management</h2>
        <Breadcrumbs currentPage={"Player Management"} />
        <PlayerManagement></PlayerManagement>
      </PlayerContext.Provider>
    </Layout>
  );
};

export default Player;
