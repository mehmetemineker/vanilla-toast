(() => {
    const toastPosition = {
        TopLeft: "top-left",
        TopCenter: "top-center",
        TopRight: "top-right",
        BottomLeft: "bottom-left",
        BottomCenter: "bottom-center",
        BottomRight: "bottom-right"
    }

    const toastPositionIndex = [
        [toastPosition.TopLeft, toastPosition.TopCenter, toastPosition.TopRight],
        [toastPosition.BottomLeft, toastPosition.BottomCenter, toastPosition.BottomRight]
    ]

    class VTContainer extends HTMLElement {
        constructor() {
            super()
        }
    }

    class VTRow extends HTMLElement {
        constructor() {
            super()
        }
    }

    class VTCol extends HTMLElement {
        constructor(position) {
            super()

            this.setAttribute("position", position)
        }
    }

    class VTCard extends HTMLElement {
        constructor() {
            super()
        }
    }

    customElements.define("vt-container", VTContainer)
    customElements.define("vt-row", VTRow)
    customElements.define("vt-col", VTCol)
    customElements.define("vt-card", VTCard)

    const styles = `
        vt-container{
            position: fixed;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            pointer-events: none;
        }

        vt-row{
            display: flex;
            justify-content: space-between;
        }
        
        vt-col{
            flex: 1;
            margin: 10px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `

    const styleSheet = document.createElement("style")
    styleSheet.innerText = styles.replace((/  |\r\n|\n|\r/gm), "")
    document.head.appendChild(styleSheet)

    const vtContainer = new VTContainer()

    for (const ri of [0, 1]) {
        const row = new VTRow()

        for (const ci of [0, 1, 2]) {
            const col = new VTCol(toastPositionIndex[ri][ci])

            row.appendChild(col)
        }

        vtContainer.appendChild(row)
    }

    document.body.appendChild(vtContainer)

    window.vt = {
        success(message = "Hi!", position = toastPosition.TopCenter) {
            const col = document.querySelector(`vt-col[position='${position}']`)

            const card = new VTCard()
            card.innerHTML = message;

            col.appendChild(card)

            console.log(message, position, col)
        }
    }

})()