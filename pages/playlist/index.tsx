import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Button from "../../components/common/Button";
import PlaylistCard from "../../components/common/PlaylistCard";
import PlayList from "../../models/PlayList/PlayList";
import Layout from "../../components/Layout";
import PlaylistService from "../../services/playlist.service";
import Router from 'next/router';

function Index() {

  let breadcrumbPaths = [{ name: "Home", path: "/" }];

  const [loader, setLoader] = useState<boolean>(false);
  const [ playlist , setPlaylist] = useState<PlayList[]>([])

  useEffect(() => {
    fetchMyApi()
  }, [])

  async function fetchMyApi() {
        setLoader(true);
        var response = await PlaylistService.getAllPlayLists();
        console.log("playlistService getAllPlayLists", response);
        if (response.status == true) {
            setPlaylist(response.data);
        }
        setLoader(false);
    }




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
          <Button variant="contained" type="submit" onClick={() => Router.push('/playlist/Add')}>Add Playlist</Button>
        </div>
        <div className="m-6 flex gap-4 flex-wrap ">
            {playlist.map(data => <PlaylistCard key={data.id} name={data.playListName} id={data.id} image={data.thumbnail}/>) }
        </div>
      </Layout>
    </>
  );
}

export default Index;
