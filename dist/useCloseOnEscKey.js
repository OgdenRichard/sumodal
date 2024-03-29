"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCloseOnEscKey = void 0;
var _react = require("react");
/**
 * Custom React hook
 * Allows user to close modal using Esc key
 * Removes event listener on unmount
 * @param {boolean} isOpen
 * @param {Function} setIsOpen
 * @param {boolean} closeOnEscKey
 * @returns {Function}
 */
const useCloseOnEscKey = (isOpen, setIsOpen, closeOnEscKey) => {
  const handleEscKeyUp = (0, _react.useCallback)(event => {
    if (isOpen && event.key === "Escape") {
      setIsOpen(false);
    }
  }, [setIsOpen, isOpen]);
  return (0, _react.useEffect)(() => {
    if (closeOnEscKey) {
      window.addEventListener("keydown", handleEscKeyUp);
    }
    return () => {
      if (closeOnEscKey) {
        window.removeEventListener("keydown", handleEscKeyUp);
      }
    };
  }, [closeOnEscKey, handleEscKeyUp]);
};
exports.useCloseOnEscKey = useCloseOnEscKey;