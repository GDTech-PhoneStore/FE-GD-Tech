import * as React from "react";
import { Stack } from "react-bootstrap";

export interface IFootersProps {}

export default class Footers extends React.Component<IFootersProps> {
  public render() {
    return (
      <footer className="footer">
        <Stack direction="horizontal" gap={2}>
          <div className="p-2 me-auto">Let’s Get Sosial</div>
          <div className="p-2 me-auto">
          <div className="text-wrap-5">Informasi Layanan</div>
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  Lokasi Toko
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  Syarat dan Ketentuan
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">Pengembalian Barang</span>
              </p>
            </div>
          </div>
          <div className="p-2 me-auto">Contact Center</div>
        </Stack>
        {/* <div className="text-wrapper-4">Let’s Get Sosial</div>
        <div className="informasi-layanan">
          <div className="text-wrapper-5">Informasi Layanan</div>
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                Lokasi Toko
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                Syarat dan Ketentuan
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">Pengembalian Barang</span>
            </p>
          </div>
        </div>
        <div className="contact">
          <div className="text-wrapper-5">Contact Center</div>
          <div className="flexcontainer-2">
            <p className="text">
              <span className="span">
                0822-8890-2234
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">(0351) 566678</span>
            </p>
          </div>
        </div>
        <div className="text-wrapper-6">Logo Phone Store</div>
        <img
          className="whatsapp"
          alt="Whatsapp"
          src="https://c.animaapp.com/qJH7V4G2/img/whatsapp-1@2x.png"
        />
        <img
          className="instagram"
          alt="Instagram"
          src="https://c.animaapp.com/qJH7V4G2/img/instagram-1@2x.png"
        />
        <img
          className="facebook"
          alt="Facebook"
          src="https://c.animaapp.com/qJH7V4G2/img/facebook-1@2x.png"
        /> */}
      </footer>
    );
  }
}
