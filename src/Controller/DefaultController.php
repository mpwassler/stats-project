<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="default")
     */
    public function index()
    {
         return $this->render('layout.html.twig');
    }

    /**
     * @Route("/api/player/", name="api_players")
     */
    public function showPlayersAction()
    {
        $em = $this->getDoctrine()->getManager();        
        $query = $em->createQuery('SELECT p.id, p.firstName, p.lastName FROM App\Entity\Player as p');        
        return new JsonResponse($query->getResult());
    }

    /**
     * @Route("/api/player/{player}", name="api_player_id")
     */
    public function showPlayerByIdAction( $player, SerializerInterface $serializer )
    {   

        $em = $this->getDoctrine()->getManager();
        $player = $em->getRepository('App\Entity\Player')->findOneBy([ 'id' => $player ]);            
        return new JsonResponse($serializer->normalize($player));
    }
}


