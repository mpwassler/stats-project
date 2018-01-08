<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GameRepository")
 */
class Game
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /** @ORM\ManyToOne(targetEntity="Team", fetch="EAGER") */	
    private $homeTeam;

	/** @ORM\ManyToOne(targetEntity="Team", fetch="EAGER") */
    private $awayTeam;

    /** @ORM\Column(type="integer") */
    private $week;

    public function getHomeTeam() 
    {
        return $this->homeTeam;
    }

    public function setHomeTeam($homeTeam) 
    {
        $this->homeTeam = $homeTeam;
    }

    public function getAwayTeam() 
    {
        return $this->awayTeam;
    }

    public function setAwayTeam($awayTeam) 
    {
        $this->awayTeam = $awayTeam;
    }

    public function getWeek() 
    {
        return $this->week;
    }

    public function setWeek( $week ) 
    {
        $this->week = $week;
    }
}
