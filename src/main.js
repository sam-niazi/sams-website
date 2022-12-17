const response = await fetch( './src/caps.json' ) 
const Hats     = await response.json()

function preload() {

    const images = []

    for ( var i = 0; i < arguments.length; i++ ) {

        images[ i ]     = new Image()
        images[ i ].src = arguments[ i ]

    }
}

preload(
    "https://www.howardstern.com/wp-content/uploads/sites/3/2022/09/mens-new-era-red-kansas-city-chiefs-2022-sideline-9fifty-ink-dye-snapback-hat_ss5_p-4687652pv-3u-1d1vf4jjjog1q2cjrzj5v-pbvsabfwbr9f2079o7gd.jpg?crop=6px%2C149px%2C900px%2C599px&resize=700%2C466&quality=100",
    "https://fanatics.frgimages.com/minnesota-vikings/mens-new-era-purple-minnesota-vikings-omaha-59fifty-fitted-hat_pi2539000_ff_2539493_full.jpg?_hv=2&w=900",
    "https://images.footballfanatics.com/cincinnati-bengals/mens-new-era-olive-cincinnati-bengals-color-pack-59fifty-fitted-hat_pi4673000_altimages_ff_4673523-883c03762b408c0bd13aalt2_full.jpg?_hv=2&w=900"
)

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

