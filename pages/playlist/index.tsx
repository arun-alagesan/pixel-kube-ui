import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Button from "../../components/common/Button";
import PlaylistCard from "../../components/common/PlaylistCard";
import Layout from "../../components/Layout";
import { playlistService } from "../../services/playlist.service";


function Index() {
  let breadcrumbPaths = [{ name: "Home", path: "/" }];
  const [ playlist , SetPlaylist] = useState<any>([])
  useEffect(() => {
    SetPlaylist(playlistService.getAllPlaylist())
  }, [])
  console.log(playlist)
  return (
    <>
      <Layout>
        <div className="flex justify-between items-center m-6">
        <div>
          <h2 className="text-xl font-bold">Playlist Management</h2>
          <Breadcrumbs
            currentPage={"Playlist Management"}
            routes={breadcrumbPaths}
          />
          </div>
          <Button>Add Playlist</Button>
        </div>
        <div className="m-6 flex gap-4 flex-wrap ">
            {playlist.map(data => <PlaylistCard key={data.id} name={data.name} id={data.id} image={data.image}/>) }
        </div>
      </Layout>
    </>
  );
}

export default Index;
