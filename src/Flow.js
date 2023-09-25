import React, { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  MiniMap,
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
  Background,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { fetchNodesFromDB, fetchEdgesFromDB } from "./api"; // Import your updated API functions
import "./App.css";

const proOptions = { hideAttribution: true };

function transformEdgeData(edgeData) {
  return Object.values(edgeData).map((edge) => ({
    id: edge.id,
    source: `node-${edge.source}`,
    target: `node-${edge.target}`,
    animated: edge.animated
  }));
}

function Flow() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    // Fetch nodes and edges from the database
    const fetchNodesAndEdges = async () => {
      try {
        const nodesData = await fetchNodesFromDB();
        const edgesData = await fetchEdgesFromDB();

        // Transform nodesData into the desired format
        const transformedNodesData = nodesData.map(node => ({
          id: `node-${node.id}`,
          type: node.node_type,
          position: { x: node.position_x, y: node.position_y },
          data: { label: node.label }
        }));

        const transformedEdgesData = transformEdgeData(edgesData);

        setNodes(transformedNodesData);
        setEdges(transformedEdgesData);
        console.log("Fetched nodes:", transformedNodesData);
        console.log("Fetched edges:", transformedEdgesData);
      } catch (error) {
        console.error("Error fetching data from the database:", error);
      }
    };

    fetchNodesAndEdges();
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const nodeColor = (node) => {
    switch (node.type) {
      case "input":
        return "#6ede87";
      case "output":
        return "#6865A5";
      default:
        return "#ff0072";
    }
  };

  return (
    <div id="react-flow-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodesDraggable={true}
        nodesConnectable={true}
        elementsSelectable={true}
        fitView
        proOptions={proOptions}
      >
        <Background />
        <Controls />
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
      </ReactFlow>
    </div>
  );
}

export default Flow;
