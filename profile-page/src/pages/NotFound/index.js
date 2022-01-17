import React from "react";
import { NotFoundStyle } from '../style'
import NotFoundImg from '../../img/notfound.jpg'

export default function NotFound() {
    return (
        <NotFoundStyle>
            <img src={NotFoundImg} />
        </NotFoundStyle>
  )
}