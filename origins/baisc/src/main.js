// Generated by CoffeeScript 1.6.3
(function() {
  var canvas, config, ctx, draw_cross, draw_font, draw_grids, draw_line, main;

  canvas = document.querySelector('#canvas');

  ctx = canvas.getContext('2d');

  ctx.globalAlpha = 1;

  ctx.lineWidth = 6;

  ctx.strokeStyle = 'white';

  ctx.fillStyle = 'hsl(240,90%,80%)';

  ctx.shadowColor = 'hsl(240,30%,40%)';

  ctx.shadowBlur = 6;

  ctx.shadowOffsetX = 0;

  ctx.shadowOffsetY = 0;

  ctx.lineCap = 'round';

  ctx.lineJoin = 'round';

  config = {
    level: 11,
    size: 2,
    padding: 8,
    step: 27,
    block: 110,
    rate: 0.5
  };

  draw_grids = function() {
    var hints, unit, x, y, _i, _ref, _results;
    unit = {
      length: config.block,
      x: 20,
      y: 20,
      padding: config.padding,
      level: config.level
    };
    unit.area = (config.size + 1) * config.step;
    _results = [];
    for (x = _i = 0, _ref = unit.level; 0 <= _ref ? _i <= _ref : _i >= _ref; x = 0 <= _ref ? ++_i : --_i) {
      _results.push((function() {
        var _j, _ref1, _results1;
        _results1 = [];
        for (y = _j = 0, _ref1 = unit.level; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
          hints = {
            x: (x * unit.length) + unit.x,
            y: (y * unit.length) + unit.y
          };
          draw_font(hints);
          _results1.push(ctx.fillRect(unit.x + (x * unit.length) - unit.padding, unit.y + (y * unit.length) - unit.padding, unit.area + (unit.padding * 2), unit.area + (unit.padding * 2)));
        }
        return _results1;
      })());
    }
    return _results;
  };

  draw_font = function(opts) {
    var hints, unit, x, y, _i, _ref, _results;
    unit = {
      length: config.step,
      size: config.size
    };
    _results = [];
    for (x = _i = 0, _ref = unit.size; 0 <= _ref ? _i <= _ref : _i >= _ref; x = 0 <= _ref ? ++_i : --_i) {
      _results.push((function() {
        var _j, _ref1, _results1;
        _results1 = [];
        for (y = _j = 0, _ref1 = unit.size; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
          hints = {
            x: (x * unit.length) + opts.x,
            y: (y * unit.length) + opts.y
          };
          _results1.push(draw_cross(hints));
        }
        return _results1;
      })());
    }
    return _results;
  };

  draw_cross = function(opts) {
    var unit;
    unit = {
      length: config.step
    };
    draw_line.apply(null, [
      {
        x: opts.x,
        y: opts.y
      }, {
        x: opts.x + unit.length,
        y: opts.y + unit.length
      }
    ]);
    return draw_line.apply(null, [
      {
        x: opts.x + unit.length,
        y: opts.y
      }, {
        x: opts.x,
        y: opts.y + unit.length
      }
    ]);
  };

  draw_line = function(start, reach) {
    if (Math.random() <= config.rate) {
      ctx.moveTo(start.x, start.y);
      return ctx.lineTo(reach.x, reach.y);
    }
  };

  (main = function() {
    ctx.beginPath();
    draw_grids();
    return ctx.stroke();
  })();

}).call(this);

/*
//@ sourceMappingURL=main.map
*/
