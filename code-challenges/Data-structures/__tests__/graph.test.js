'use strict';

const Graph = require('../graph/graph.js');

describe('Graph', () => {
  const graph1 = new Graph();
  let node1=graph1.addNode(5);
  let node2=graph1.addNode(6);

  it('Node can be successfully added to the graph', () => {
    expect(node1).toEqual({ value: 5 });
  });
  it('An edge can be successfully added to the graph', () => {
    graph1.addEdge(node1,node2);
    expect(graph1.adjacencyList.get(node1)).toEqual([{ vertex:node2,weight:0 }]);
  });
  it('A weighted edge can be successfully added to the graph', () => {
    graph1.addEdge(node2,node1,5);
    expect(graph1.adjacencyList.get(node2)).toEqual([{ vertex:node1,weight:5 }]);
  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let expected = new Map();
    expected.set(node1,[{ vertex:node2,weight:0 }]);
    expected.set(node2,[{ vertex:node1,weight:5 }]);
    expect(graph1.getNodes()).toEqual(expected);
  });
  it('All appropriate neighbors can be retrieved from the graph', () => {
    let expected = [{ vertex:node2,weight:0 }];
    expect(graph1.getNeighbors(node1)).toEqual(expected);
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    expect(graph1.getNeighbors(node2)[0].weight).toEqual(5);
  });
  it('An empty graph properly returns null', () => {
    const graph2= new Graph();
    expect(graph2.getNodes()).toEqual(null);
  });
});
