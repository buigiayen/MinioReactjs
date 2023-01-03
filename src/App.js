import React, { useEffect, useState } from "react";
import "./styles.css";
import * as minio from "minio";

export default function App() {
  const [buckets, setBuckets] = useState([]);

  useEffect(() => {
    const getBuckets = async () => {
      // create the client
      const mc = new minio.Client({
        endPoint: "play.min.io",
        port: 9000,
        useSSL: true,
        accessKey: "Q3AM3UQ867SPQQA43P2F",
        secretKey: "zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG"
      });
      // list buckets
      const res = await mc.listBuckets();

      setBuckets(res);
    };
    getBuckets();
  }, []);

  return (
    <div className="App">
      <h1>Minio example</h1>

      <ul>
        {buckets.slice(0, 5).map((bucket, index) => (
          <li key={index}>{bucket.name}</li>
        ))}
      </ul>
    </div>
  );
}
