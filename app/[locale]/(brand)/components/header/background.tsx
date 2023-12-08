"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export const BackgroundIntro = ({ ...className }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    { loop: true, },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 6000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  const images = [
    "/images/1.jpg", "/images/2.jpg", "/images/3.jpg"
  ]

  return (
    <div ref={sliderRef} className="keen-slider brightness-75 hover:brightness-100 hover:duration-300 duration-300">
      {images.map((item, idx) => (
        <img src={item} key={idx} className="keen-slider__slide h-[640px] object-cover"/>
      ))}
    </div>
  );
}