<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PlayerGameStatsRepository")
 */
class PlayerGameStats
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    // add your own fields

    /** @ORM\ManyToOne(targetEntity="Player") */
    private $player;

	/** @ORM\ManyToOne(targetEntity="Game") */
    private $game;

    /** @ORM\Column(type="integer") */
    private $touchdowns;

    /** @ORM\Column(type="integer") */
    private $interceptions;

    /** @ORM\Column(type="integer") */
    private $completions;    

    /** @ORM\Column(type="integer") */
    private $attempts;    

    /** @ORM\Column(type="integer") */
    private $yards;    

}