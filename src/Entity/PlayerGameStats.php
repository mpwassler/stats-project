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

    /** @ORM\ManyToOne(targetEntity="Player") */
    private $player;

	/** @ORM\ManyToOne(targetEntity="Game",fetch="EAGER") */
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

    public function setYards ($yards)
    {
        $this->yards = $yards;
    }   

    public function getYards ()
    {
        return $this->yards;
    }   

    public function setGame ($game)
    {
        $this->game = $game;
    }

    public function setTouchdowns ($touchdowns)
    {
        $this->touchdowns = $touchdowns;
    }

    public function getTouchdowns ()
    {
        return $this->touchdowns;
    }

    public function setInterceptions ($interceptions)
    {
        $this->interceptions = $interceptions;
    }

    public function getInterceptions ()
    {
        return $this->interceptions;
    }

    public function setCompletions ($completions)
    {
        $this->completions = $completions;
    }

    public function getCompletions ()
    {
        return $this->completions;
    }

    public function setAttempts ($attempts)
    {
        $this->attempts = $attempts;
    }

    public function getAttempts ()
    {
        return $this->attempts;
    }

    public function getGame ()
    {
        return $this->game;
    }

    

}