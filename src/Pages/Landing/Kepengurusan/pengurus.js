import React from 'react';
import "./w3.css";
import akbar from "./img/akbar2.jpeg";
import nasir from "./img/nasir.jpg";

export default function pengurus(){
    return (
        <div class="w3-container w3-padding-64" style={{padding:"128px 16px"}}>
        <div class="w3-card-1" class="w3-center">
          <h1 class="w3-xxlarge"><b>The Badgers</b></h1>
          <h2 class="w3-xlarge w3-text-red">Daily Management Team</h2>
          </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <table style={{backgroundColor:"#f1f1f1",padding:"20px",borderRadius:"5px",margin:"10px 10px",width:"410px"}} class="w3-card-4">
                <caption><h3 class="w3-xlarge"><b>Ketua Umum</b></h3></caption>
                  <tr>
                    <th colSpan="3"><img src={akbar} class="w3-image w3-hide-small" style={{width:"335px",height:"471px"}}/></th>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Nama</th>
                    <th>:</th>
                    <td>Mohammad Akbar Hakiki</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Fakultas</th>
                    <th>:</th>
                    <td>Fakultas Ekonomi & Bisnis</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Prodi</th>
                    <th>:</th>
                    <td>Akuntansi</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>NPM</th>
                    <th>:</th>
                    <td>17013010100</td>
                  </tr>
              </table>

              <table style={{backgroundColor:"#f1f1f1",padding:"20px",borderRadius:"5px",margin:"10px 10px",width:"410px"}} class="w3-card-4">
                <caption><h3 class="w3-xlarge"><b>Wakil Ketua Umum</b></h3></caption>
                  <tr>
                    <th colSpan="3"><img src={nasir} class="w3-image w3-hide-small" style={{width:"335px",height:"471px"}}/></th>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Nama</th>
                    <th>:</th>
                    <td>Muhammad Nashir Hasan</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Fakultas</th>
                    <th>:</th>
                    <td>Fakultas Ekonomi & Bisnis</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Prodi</th>
                    <th>:</th>
                    <td>Manajemen</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>NPM</th>
                    <th>:</th>
                    <td>1912010183</td>
                  </tr>
              </table>
            </div>

            <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <table style={{backgroundColor:"#f1f1f1",padding:"20px",borderRadius:"5px",margin:"10px 10px",width:"410px"}} class="w3-card-4">
                <caption><h3 class="w3-xlarge"><b>Sektretaris 1</b></h3></caption>
                  <tr>
                    <th colSpan="3"><img src="" alt=""/></th>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Nama</th>
                    <th>:</th>
                    <td>Niko Kurniawan</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Fakultas</th>
                    <th>:</th>
                    <td>Fakultas Ilmu Soisal & Politik</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Prodi</th>
                    <th>:</th>
                    <td>Ilmu Komunikasi</td>
                  </tr>
                  <tr>
                    <th  class="w3-left-align" style={{paddingLeft:"50px"}}>NPM</th>
                    <th>:</th>
                    <td>18043010008</td>
                  </tr>
              </table>

              <table style={{backgroundColor:"#f1f1f1",padding:"20px",borderRadius:"5px",margin:"10px 10px",width:"410px"}} class="w3-card-4">
                <caption><h3 class="w3-xlarge"><b>Sektretaris 2</b></h3></caption>
                  <tr>
                    <th colSpan="3"><img src="" alt=""/></th>
                  </tr>
                  <tr>
                    <th  class="w3-left-align" style={{paddingLeft:"50px"}}>Nama</th>
                    <th>:</th>
                    <td>Nur Fajri Nishfi Sya'baniyah</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Fakultas</th>
                    <th>:</th>
                    <td>Fakultas Teknik</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Prodi</th>
                    <th>:</th>
                    <td>Teknik Lingkungan</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>NPM</th>
                    <th>:</th>
                    <td>18034010029</td>
                  </tr>
              </table>
            </div>

            <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <table style={{backgroundColor:"#f1f1f1",padding:"20px",borderRadius:"5px",margin:"10px 10px",width:"410px"}} class="w3-card-4">
                <caption><h3 class="w3-xlarge"><b>Bendahara 1</b></h3></caption>
                  <tr>
                    <th colSpan="3"><img src="" alt=""/></th>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Nama</th>
                    <th>:</th>
                    <td>Bisma Bayu Putra</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Fakultas</th>
                    <th>:</th>
                    <td>Fakultas Pertanian</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Prodi</th>
                    <th>:</th>
                    <td>Agribisnis</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>NPM</th>
                    <th>:</th>
                    <td>19024010105</td>
                  </tr>
              </table>

              <table style={{backgroundColor:"#f1f1f1",padding:"20px",borderRadius:"5px",margin:"10px 10px",width:"410px"}} class="w3-card-4">
                <caption><h3 class="w3-xlarge"><b>Bendahara 2</b></h3></caption>
                  <tr>
                    <th colSpan="3"><img src="" alt=""/></th>
                  </tr>
                  <tr>
                    <th  class="w3-left-align" style={{paddingLeft:"50px"}}>Nama</th>
                    <th>:</th>
                    <td>Addie Sabta I.</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Fakultas</th>
                    <th>:</th>
                    <td>Fakultas Ekonomi & Bisnis</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>Prodi</th>
                    <th>:</th>
                    <td>Ekonomi Pembangunan</td>
                  </tr>
                  <tr>
                    <th class="w3-left-align" style={{paddingLeft:"50px"}}>NPM</th>
                    <th>:</th>
                    <td>18011010138</td>
                  </tr>
              </table>
            </div>

            <div style={{padding:"10px", display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <table style={{backgroundColor:"#f1f1f1",padding:"10px",borderRadius:"5px",marginTop:"20px",marginRight:"20px",width:"400px"}} class="w3-card-4">
                <caption><h3 class="w3-xlarge"><b>Div Pengembangan atlet</b></h3></caption>
                  <tr>
                    <th colSpan="3"><img src="" alt=""/></th>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Nama</th>
                    <th>:</th>
                    <td>Adelya Eka Cahyono Putri</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Fakultas</th>
                    <th>:</th>
                    <td>Fakultas Ekonomi & Bisnis</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Prodi</th>
                    <th>:</th>
                    <td>Akuntansi</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>NPM</th>
                    <th>:</th>
                    <td>19013010062</td>
                  </tr>
                </table>

              <table style={{backgroundColor:"#f1f1f1",padding:"10px",borderRadius:"5px",marginTop:"20px",marginRight:"20px",width:"400px"}} class="w3-card-4">
                <caption><h3 class="w3-xlarge"><b>Div Humas</b></h3></caption>
                  <tr>
                    <th colSpan="3"><img src="" alt=""/></th>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Nama</th>
                    <th>:</th>
                    <td>Alifio Ananda Shatria</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Fakultas</th>
                    <th>:</th>
                    <td>Fakultas Ekonomi & Bisnis</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Prodi</th>
                    <th>:</th>
                    <td>Ekonomi Pembangunan</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>NPM</th>
                    <th>:</th>
                    <td>18011010060</td>
                  </tr>
              </table>

              <table style={{backgroundColor:"#f1f1f1",padding:"10px",borderRadius:"5px",marginTop:"20px",width:"400px"}} class="w3-card-4">
                <caption><h3 class="w3-xlarge"><b>Div Perlengkapan</b></h3></caption>
                  <tr>
                    <th colSpan="3"><img src="" alt=""/></th>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Nama</th>
                    <th>:</th>
                    <td>Jefri Abdurrozak Ismail</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Fakultas</th>
                    <th>:</th>
                    <td>Fakultas Ilmu Komputer</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>Prodi</th>
                    <th>:</th>
                    <td>Informatika</td>
                  </tr>
                  <tr class="w3-left-align">
                    <th>NPM</th>
                    <th>:</th>
                    <td>18081010059</td>
                  </tr>
              </table>
        </div>
        </div>
    )
}