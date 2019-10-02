<template>
    <div id="left">
        <img src="../assets/profile.png" alt="profile logo">
        <p>Andrew</p>
        <ul>
            <a href=""><li><img src="../assets/house.png" alt="">Главная</li></a>
            <a href=""><li><img src="../assets/avatar.png" alt=""> Мой профиль</li></a>
            <a href=""><li><img src="../assets/settings.png" alt="">Контакты</li></a>
            <a href=""><li><img src="../assets/avatar.png" alt="">Рейтинг</li></a>
            <a href="" id="suplink" ><li><img src="../assets/message.png" alt="">Обратная связь     ./</li></a>
        </ul>
        <a href="https://github.com/ext0404" id="gitlink"><img src="../assets/git.png" alt="github" id="giticon"></a> 
    </div>
</template>

<script>
export default {
    name: 'left'
    
}
</script>

<style scoped>
    #left{
        height: 100vh;
        width: 200px;
        background-color: rgb(48, 52, 73);
        
    }
    p{
        color: rgb(219, 77, 77);
    }
    img{
        height: 50px;
        width: 50px;
        padding-top: 20px;
    }
    ul{
        margin-left:  auto;
        margin-right:  auto;
        padding-top: 30px;
        text-align: center;
        align-content: center;
    }
    li, a{
        padding-top: 10px;
        list-style: none;
        margin-left:  auto;
        margin-right:  auto;
        color: #ffffff;
        text-decoration: none;
    }
    li img{
        height: 20px;
        width: 20px;
        padding-right: 5px;
    }

    li:hover{
        text-decoration: underline aqua;
    }


    #gitlink{
        margin-top: 50px;
        padding-top: 50px;
    }
    #giticon:hover{
        margin-top: -5px;
    }
    #suplink{
        
    }
    #suplink::after{
        content: '';
        border-color: transparent white;
        border-style: solid;
        border-width: 20px 15px 20px 0px;
        height: 0px;
        width: 0px;
        position: absolute;
        margin-left: 65px;
        /* margin-bottom: 50px; */
        margin-top: -30px;
        
       
    }

</style>