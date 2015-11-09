function createGraph(vert,edges){
    var g = new dagreD3.Digraph();

    for(var i=0;i<vert.length;i++)
    {
        g.addNode(vert[i].id, {label: vert[i].name});
    }
    for(var i=0;i<edges.length;i++)
    {
        g.addEdge(null, edges[i].from, edges[i].to, {label: "Edge"+(i+1)});
    }
    return g;
}
function draw (vert,edges)
{
    var renderer = new dagreD3.Renderer();
    renderer.run(createGraph(vert,edges), d3.select("svg g"));
}