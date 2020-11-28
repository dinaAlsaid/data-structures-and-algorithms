'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex,weight){
    this.vertex=vertex;
    this.weight=weight;
  }
}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }
  //adds a new vertex to the adjacency list of the graph
  addNode(val){
    let node = new Vertex(val);
    this.adjacencyList.set(node,[]);
    return node;
  }
  //adds a new edge between two vertices

  /**
 * @param {Vertex} start - Starting vertex
 * @param {Vertex} end - ending vertex
 * @param {Number} weight - weight of the edge
 */
  addEdge(start, end , weight =0){
    //if the nodes don't exist we can't add an edge
    if (
      !this.adjacencyList.has(start) ||
      !this.adjacencyList.has(end)
    ) {
      throw new Error('Invalid Vertex!!!');
    }

    let adjacentNodes=this.adjacencyList.get(start);
    adjacentNodes.push(new Edge(end,weight));
  }
  //returns all the nodes in a graph
  getNodes(){
    if(this.adjacencyList.size===0){
      return null;
    }else{
      console.log('adjacency list',this.adjacencyList);
      return this.adjacencyList;
    }
  }
  //returns all the nodes adjacent to a given vertex
  getNeighbors(vertex){
    let adjacentNodes= this.adjacencyList.get(vertex);
    if(adjacentNodes.length === 0){
      return null;
    }else{
      return adjacentNodes;

    }
  }
  //returns the number of nodes in a graph
  size(){
    return this.adjacencyList.size;
  }
}

module.exports=Graph;
