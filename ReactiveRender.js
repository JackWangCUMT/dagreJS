(function() {
  var ReactiveDagre, contains;

  contains = function(a, b) {
    return _.contains(a, b);
  };

  ReactiveDagre = (function() {
    function ReactiveDagre(target) {
      this.graph = new dagreD3.Digraph();
      this.renderer = new dagreD3.Renderer();
      this.layout = dagreD3.layout();
      this.target = target;
      this.renderer = this.renderer.layout(this.layout).transition(ReactiveDagre.prototype.transition);
    }

    ReactiveDagre.prototype.render = function() {
      return this.renderer.run(this.graph, d3.select(this.target));
    };

    ReactiveDagre.prototype.addNode = function(name, options, norerender) {
      this.graph.addNode(name, options);
      if ((norerender == null) || !norerender) {
        return this.render();
      }
    };

    ReactiveDagre.prototype.addEdge = function(id, source, dest, options, norerender) {
      if (!contains(this.graph.nodes(), source)) {
        return;
      }
      if (!contains(this.graph.nodes(), dest)) {
        return;
      }
      this.graph.addEdge(id, source, dest, options);
      if ((norerender == null) || !norerender) {
        return this.render();
      }
    };

    ReactiveDagre.prototype.delEdge = function(id, norerender) {
      if (!contains(this.graph.edges(), id)) {
        return;
      }
      this.graph.delEdge(id);
      if ((norerender == null) || !norerender) {
        return this.render();
      }
    };

    ReactiveDagre.prototype.delNode = function(id, norerender) {
      if (!contains(this.graph.nodes(), id)) {
        return;
      }
      this.graph.delNode(id);
      if ((norerender == null) || !norerender) {
        return this.render();
      }
    };

    ReactiveDagre.prototype.transition = function(selection) {
      return selection.transition().duration(500);
    };

    return ReactiveDagre;

  })();

  this.ReactiveDagre = ReactiveDagre;

}).call(this);

//# sourceMappingURL=ReactiveRender.js.map
