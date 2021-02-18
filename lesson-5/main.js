function cheesBoard() {
  var table = document.createElement('table')
  var words = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '']
  var blackFigs = [
    '8',
    '&#9820;',
    '&#9822;',
    '&#9821;',
    '&#9819;',
    '&#9818;',
    '&#9821;',
    '&#9822;',
    '&#9820;',
    '1',
  ]
  var whiteFigs = [
    '1',
    '&#9814;',
    '&#9816;',
    '&#9815;',
    '&#9813;',
    '&#9812;',
    '&#9815;',
    '&#9816;',
    '&#9814;',
    '8',
  ]
  var blackFigsPawns = [
    '7',
    '&#9823;',
    '&#9823;',
    '&#9823;',
    '&#9823;',
    '&#9823;',
    '&#9823;',
    '&#9823;',
    '&#9823;',
    '2',
  ]
  var whiteFigsPawns = [
    '2',
    '&#9817;',
    '&#9817;',
    '&#9817;',
    '&#9817;',
    '&#9817;',
    '&#9817;',
    '&#9817;',
    '&#9817;',
    '7',
  ]
  for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
    var newTr = table.insertRow(i) // i - номер строки с 0
    for (var j = 0; j < 10; j++) {
      // j - номер столбца
      var newTd = newTr.insertCell(j) // в строку вставляем ячейку
      switch (i) {
        case 0:
          newTd.innerText = words[j]
          break
        case 1:
          newTd.innerHTML = whiteFigs[j]
          break
        case 2:
          newTd.innerHTML = whiteFigsPawns[j]
          break
        case 7:
          newTd.innerHTML = blackFigsPawns[j]
          break
        case 8:
          newTd.innerHTML = blackFigs[j]
          break
        case 9:
          newTd.innerText = words[j]
          break
        default:
          if (j == 0 || j == 9) {
            newTd.innerHTML = a
          }
          break
      }
    }
  }
  document.body.append(table)
}
cheesBoard()
