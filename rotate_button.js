/*
 * @author: c0hb1rd
 * @Date: 06-18 2017
 * @Env: Oh-My-Zsh + Tmux + K-Vim + ECMAScript6
 */
class RotateButton {
  //set default value for text variable
  //support for es6
  constructor (text) {
    //create button node
    this.btn = document.createElement("button");
    this.btn.innerHTML = text === undefined ? "Rotate Button" : text;
    this.appended = false;
    this.rotated = false;
  }

  /*
   * @require: DOM node
   * @descript: append to this DOM object
   * @return: boolean -> success or fail
   */
  appendTo (node) {
    if (!this.isAppended()) {
      node.appendChild(this.btn);
      this.appended = true;

      return true;
    }
    return false;
  }

  /*
   * @require: DOM node
   * @descript: move this node to another node
   * @return: boolean -> success or fail
   */
  moveTo (node) {
    if (this.isAppended()) {
      node.appendChild(this.btn);
      return true;
    }
    return false;
  }

  /*
   * @require: null
   * @descript: remove this object from parent node
   * @return: boolean -> success or fail
   */
  remove () {
    if (this.isAppended()) {
      this.btn.parentElement.removeChild(this.btn);
      this.appended = false;

      return true;
    }
    return false;
  }

  /*
   * @require: null
   * @descript: judge this node whether append to any node
   * @return: boolean -> has been append or not
   */
  isAppended () {
    return this.appended;
  }

  /*
   * @require: null
   * @descript: judge this node whether rotated
   * @return: boolean -> has been rotation or not
   */
  isRotated() {
    return this.rotated;
  }

  /*
   * @require: delay time
   * @descript: start rotation
   * @return: boolean -> success or fail
   */
  start (wait) {
    if (!this.isRotated()) {
      let _this = this;
      this.rotated = true;

      if (wait === undefined)
        wait = 100;
      if (!this.deg)
        this.deg = 0;
      this.wait = wait;
      this.timer = setInterval(function () {
        _this.deg += 1;
        _this.btn.style.transform = "rotate(" + _this.deg + "deg)";
      }, wait);
      return true;
    }
    return false;
  }

  /*
   * @require: null
   * @descript: stop rotation
   * @return: boolean -> success or fail
   */
  stop () {
    if (this.isRotated()) {
      this.rotated = false;
      clearInterval(this.timer);
      return true;
    }
    return false;
  }
}
