import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import {ENDPOINT} from '../config/services.constants';

const Logs = () => {
  const url = ENDPOINT?.backend_endpoint + "logs";

  const [data, setData] = useState({});
  const [buttonLabel, setButtonLabel] = useState("Refresh logs list");
  const [collapseDetail, setCollapseDetail] = useState({});
  const dataFake = {
    status: null,
    id: null,
    content: null,
    components: [
      {
        id: null,
        content: `OPENIA: <body><h2>Sonarqube Issues</h2> <ul> <li><span style="color: red;">public static void main(String args[])</span> uses an old style for declaring the array. It is recommended to use <span style="color: green;">String[] args</span> instead for improved readability and consistency with modern Java practices.</li> </ul> <h2>Checkstyle Issues</h2> <ul> <li><span style="color: red;">public static void main(String args[])</span> does not follow the Java naming conventions for method declarations. There should be a space between the method name and the open parenthesis, and use of old array declaration style is discouraged. Recommended: <span style="color: green;">public static void main(String[] args)</span>.</li> </ul> <h2>PMD Issues</h2> <ul> <li>The order of elements in the <span style="color: red;">public static void main(String args[])</span> method declaration should prioritize using Java best practices, including using <span style="color: green;">String[] args</span>.</li> </ul> <h2>Code suggestion </h2> <ul> <li><span style="color: green;">public static void main(String[] args)</span>{ }</li> </ul> </body>`,
      },
      {
        id: null,
        content: `GEMINIS: <body><h2>Sonarqube Issues</h2><ul><li>No issues found.</li></ul><h2>Checkstyle Issues</h2><ul><li>No issues found.</li></ul><h2>PMD Issues</h2><ul><li>No issues found.</li></ul><h2>Code suggestion </h2><ul><li>Add access modifier to the main method: <br><span style="color:blue">public</span> <span style="color:green">class</span> <span style="color:purple">Main</span>{ <br> &nbsp;&nbsp;<span style="color:blue">public</span> <span style="color:blue">static</span> <span style="color:orange">void</span> <span style="color:brown">main</span>(<span style="color:blue">String</span>[] args) {<br> &nbsp;&nbsp;}<br>}</li></ul></body>`,
      },
      // Add more components here as needed
    ]
  };

  const handleLogs = (e) => {
    setButtonLabel("Processing...");
    setCollapseDetail({});
    toggleCollapse(-1, {});
    setData({});
    const rta = axios
        .post(url, {}, {
          "headers": {"Authorization": "Bearer " }
        })
        .then(response => {
          setButtonLabel("Refresh list")
          setData(response.data);
          
        })
        .catch(err => {
          //res.send({ err }) // <= send error
          console.log(err);
          //setNewMessage('');
          setButtonLabel("Refresh list")
        });
  };

  const formatDateTime = function formatDateTime(dateString) {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    const hour = dateString.slice(9, 11);
    const minute = dateString.slice(11, 13);

    // Format as YYYY/MM/DD HH:MM
    return `${year}/${month}/${day} ${hour}:${minute}`;
}

  useEffect(() => {
    handleLogs(null);
    //setData(dataFake);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index, component) => {
    setOpenIndex(openIndex === index ? null : index);
    setCollapseDetail(component);
  };

  return (
    <div id="logs" className="min-vh-100">
      <header className="header-assistant">
        <h1>Assistant Logs</h1>
      </header>
      
    <div className="container mt-4">
      <div className="row col pt-2 pb-2">
      
        <div className="col-4"> 
      {data != null && data.components != null &&
            <select
                    className="form-select"
                    onChange={(e) => {
                        const index = e.target.value;
                        toggleCollapse(index, data.components[index]);
                    }}
                    aria-label="Select component"
                >
                    <option value="" disabled selected>Select a log entry</option>
                    {data.components.map((component, index) => (
                        <option key={index} value={index}>
                            Log: {formatDateTime(component.id)}
                        </option>
                    ))}
                </select>
      }
      </div>
      <div className="col-4"> 

        <button className="btn btn-primary" onClick={() => handleLogs()}>{buttonLabel}</button>
        </div>
      </div>
      {collapseDetail != null && collapseDetail.content != null  && openIndex != null &&
        <div className={`collapse ${collapseDetail != null ? 'show' : ''}`} id={`collapseComponent${openIndex}`}>
            <div className="card card-body">
              <h2 className="text-center">Detail of LOG: {formatDateTime(collapseDetail.id)}</h2>
              {/* Rendering HTML content with dangerouslySetInnerHTML */}
              <div dangerouslySetInnerHTML={{ __html: collapseDetail.content }} />
            </div>
          </div>
      }
    </div>
    </div>
  );
};
export default Logs;