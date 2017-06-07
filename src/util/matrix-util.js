module.exports = {
  /**
   * 同 G transform
   * @param  {Object} m 矩阵
   * @param  {Array} ts 变换数组同
   * @return  {Object} this 回调函数
   */
  transform: function(m, ts) {
    m = m.clone();
    for (var i = 0, len = ts.length; i < len; i++) {
      var t = ts[i];
      switch (t[0]) {
        case 't':
          m.translate(t[1], t[2]);
          break;
        case 's':
          m.scale(t[1], t[2]);
          break;
        case 'r':
          m.rotate(t[1]);
          break;
        case 'm':
          m.multiply(t[1]);
          break;
        default:
          continue;
      }
    }
    return m;
  },
  /**
   * 基于某点缩放
   * @param  {Object} m 矩阵
   * @param  {Number} sx x缩放
   * @param  {Number} sy y缩放
   * @param  {Number} x 坐标点
   * @param  {Number} y 坐标点
   */
  scale: function(m, sx, sy, x, y) {
    m = m.clone();
    m.translate(-1 * x, -1 * y);
    m.scale(sx, sy);
    m.translate(x, y);
    return m;
  },
  /**
   * 基于某点旋转
   * @param  {Object} m 矩阵
   * @param  {Number} r 旋转角度，用弧度表示
   * @param  {Number} x 坐标点
   * @param  {Number} y 坐标点
   */
  rotate: function(m, r, x, y) {
    m = m.clone();
    m.translate(-1 * x, -1 * y);
    m.rotate(r);
    m.translate(x, y);
    return m;
  },
  /**
   * 判断是否是3阶矩阵
   * @param  {Object} m 矩阵
   * @return {Boolean}
   */
  isMatrix3: function(m) {
    return m.type === 'matrix3';
  }
};