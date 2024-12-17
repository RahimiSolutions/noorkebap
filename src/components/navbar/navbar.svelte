<script>
    import logo from '$lib/images/logo.png'
	import Button from '../buttons/button.svelte';
</script>

<nav>
    <div class="logo">
        <img src={logo} alt="Noor Kebap">
    </div>
    <div class="menu-container">
        <ul class="menu">
            <li class="menu-item">
                <a href="/#">Inicio</a>
            </li>
            <li class="menu-item">
                <a href="/#">Menu</a>
            </li>
            <li class="menu-item">
                <a href="/#">Contacto</a>
            </li>
        </ul>
    </div>
    <div class="cta">
        <Button text="Pedido" borderRadius="100vw" bgColor="#e44961" fontweight="600"/>
    </div>
</nav>

<style lang="scss">
    nav{
        z-index: 999;
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100px;
        width: 100%;
        top: 25px;
        left: 50%;
        transform: translateX(-50%);
        .logo{
            height: 100%;
            img{
                max-height: 100%;
            }
        }
        .menu-container{
            .menu{
                display: flex;
                gap: 50px;
                background-color: var(--white);
                padding: 5px 25px;
                border-radius: 100vw;
                .menu-item{
                    font-size: var(--fs-700);
                    padding: 4px 8px;
                    list-style-type: none;
                    a{
                        text-decoration: none;
                        color: var(--black-500);
                        font-weight: 600;
                    }
                }
            }
        }
    }
</style>