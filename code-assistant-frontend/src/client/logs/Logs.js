import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Table } from 'react-bootstrap';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    margin: '0',
    padding: '0',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
  },
  main: {
    padding: '20px',
  },
  infoSection: {
    marginBottom: '30px',
  },
  missionSection: {
    marginBottom: '30px',
  },
  contactSection: {
    marginBottom: '30px',
  },
  email: {
    fontSize: '18px',
    color: '#333',
  },
  footer: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
    position: 'absolute',
    width: '100%',
    bottom: '0',
  },
};
const Logs = () => {
  const url = "http://test.miarchivo.com.co:3002/api/logs";

  const [data, setData] = useState({});
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
    const rta = axios
        .post(url, {}, {
          "headers": {"Authorization": "Bearer " }
        })
        .then(response => {
          setData(response.data);
          
        })
        .catch(err => {
          //res.send({ err }) // <= send error
          console.log(err);
          //setNewMessage('');
        });
  };

  useEffect(() => {
    handleLogs(null);
    //setData(dataFake);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index, component) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(component);
    setCollapseDetail(component);
  };

  return (
    <div className="container mt-4">
      {data != null && data.components != null && data.components.map((component, index) => (
        <div key={index} >
          <button
            className="btn btn-primary mb-2"
            type="button"
            onClick={() => toggleCollapse(index, component)}
            aria-expanded={openIndex === index}
            aria-controls={`collapseComponent${index}`}
          >
             Log: {component.id + (index + 1)}
          </button>

          
        </div>
      ))}
      {collapseDetail != null && collapseDetail.content != null  && openIndex != null &&
        <div className={`collapse ${collapseDetail != null ? 'show' : ''}`} id={`collapseComponent${openIndex}`}>
            <div className="card card-body">
              <h2 className="text-center">Detail of LOG: {collapseDetail.id}</h2>
              {/* Rendering HTML content with dangerouslySetInnerHTML */}
              <div dangerouslySetInnerHTML={{ __html: collapseDetail.content }} />
            </div>
          </div>
      }
    </div>
  );
};
export default Logs;