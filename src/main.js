const response = await fetch( '../src/caps.json' ) 
const Hats     = await response.json()

const Body = document.body

for ( let i = 0; i < Hats.hats.length; i++ ) {

    const Hat = Hats.hats[ i ]

    const HatElement      = document.createElement( 'hat' )
    const HatNameElement  = document.createElement( 'hat-name' )
    const HatImageElement = document.createElement( 'img' )
    const HatDescElement  = document.createElement( 'hat-desc' )
    const HatPriceElement = document.createElement( 'hat-price' )

    HatElement.style.animation      = `fade-in 1.5s ease-out forwards`
    HatElement.style.animationDelay = `${ i }s`

    HatNameElement.innerHTML = Hat.name

    HatImageElement.src   = Hat.image
    HatImageElement.width = '512'

    HatDescElement.innerHTML = Hat.description

    HatPriceElement.innerHTML = `$${ Hat.price }`

    HatElement.appendChild( HatNameElement )
    HatElement.appendChild( HatImageElement )
    HatElement.appendChild( HatPriceElement )
    HatElement.appendChild( HatDescElement )

    Body.appendChild( HatElement )

}

const EndElement = document.createElement( 'p' )
EndElement.innerHTML = `This is my website. To visit Nike, click <a href='https://www.nike.com/'>this</a>. If you want to visit Lids, click <a href='https://www.lids.com/'>here</a>.`

Body.appendChild( EndElement )