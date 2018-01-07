<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="default")
     */
    public function index()
    {
        return new Response('Welcome to your new controller!');
    }

    /**
     * @Route("/api/players/", name="api_players")
     */
    public function showPlayersAction(Request $request)
    {
    	return new Response('show all players');	
    }

    /**
     * @Route("/api/players/{player}", name="api_player_id")
     */
    public function showPlayerByIdAction( $player )
    {
    	return new Response('show player: ' . $player);	
    }
}


